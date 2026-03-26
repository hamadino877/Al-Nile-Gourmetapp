import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { products as mockProducts } from '@/constants/mockData';
import type { Product } from '@/types';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('name');

      if (error) {
        console.warn('Failed to fetch from Supabase, falling back to mock data:', error);
        setProducts(mockProducts);
      } else if (data && data.length > 0) {
        // Convert DB format to App format if needed (e.g., snake_case to camelCase)
        const formattedProducts: Product[] = data.map((p) => ({
          id: p.id,
          name: p.name,
          price: Number(p.price),
          categoryId: p.category_id,
          categoryName: p.category_name,
          sectionType: p.section_type,
          unit: p.unit,
          minQuantity: Number(p.min_quantity),
          step: Number(p.step),
          image: p.image,
          hasCutOptions: p.has_cut_options,
          origin: p.origin,
          description: p.description,
          prepTime: p.prep_time,
          isAvailable: p.is_available
        }));
        setProducts(formattedProducts);
      } else {
        setProducts(mockProducts);
      }
    } catch (err) {
      console.error('Error fetching products:', err);
      setProducts(mockProducts);
    } finally {
      setLoading(false);
    }
  }

  async function toggleAvailability(id: string, isAvailable: boolean) {
    const { error } = await supabase
      .from('products')
      .update({ is_available: isAvailable })
      .eq('id', id);

    if (!error) {
      setProducts(prev => prev.map(p => p.id === id ? { ...p, isAvailable } : p));
      return true;
    }
    return false;
  }

  async function updateProduct(id: string, updates: Partial<Product>) {
    // Map camlCase updates to snake_case for DB
    const dbUpdates: Record<string, unknown> = {};
    if (updates.name !== undefined) dbUpdates.name = updates.name;
    if (updates.price !== undefined) dbUpdates.price = updates.price;
    if (updates.image !== undefined) dbUpdates.image = updates.image;
    if (updates.isAvailable !== undefined) dbUpdates.is_available = updates.isAvailable;

    const { error } = await supabase
      .from('products')
      .update(dbUpdates)
      .eq('id', id);

    if (!error) {
      setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
      return true;
    }
    return false;
  }

  return { products, loading, error, refresh: fetchProducts, toggleAvailability, updateProduct };
}
