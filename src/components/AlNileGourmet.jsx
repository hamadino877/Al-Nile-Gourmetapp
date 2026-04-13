import { useState, useMemo, useEffect, useRef } from "react";

const LOGO_URL = "https://i.ibb.co/uploads/WhatsApp_Image_2026-04-11.jpeg";

const I = [
  "https://i.ibb.co/Zpv9j47X/mixboard-image-26.png","https://i.ibb.co/KxZx2D5V/mixboard-image-27.png","https://i.ibb.co/LdpQ99Tj/mixboard-image-28.png","https://i.ibb.co/jZbg72wS/mixboard-image-29.png","https://i.ibb.co/fVtzhdbD/mixboard-image-31.png","https://i.ibb.co/HTnGqnsP/mixboard-image-32.png","https://i.ibb.co/S4bJvycf/mixboard-image-34.png","https://i.ibb.co/R8QFnVB/mixboard-image-35.png","https://i.ibb.co/d0Km2Y2v/mixboard-image-36.png","https://i.ibb.co/20XxtbCH/mixboard-image-39.png","https://i.ibb.co/TS1SRBZ/mixboard-image-40.png","https://i.ibb.co/CKvjN3hY/mixboard-image-41.png","https://i.ibb.co/FqYPRvbx/mixboard-image-42.png","https://i.ibb.co/CKS23Hhq/mixboard-image-43.png","https://i.ibb.co/32DWrh8/mixboard-image-44.png","https://i.ibb.co/jPLWgdJM/mixboard-image-45.png","https://i.ibb.co/DgSXmv68/mixboard-image-46.png","https://i.ibb.co/rGqCCbBG/mixboard-image-47.png","https://i.ibb.co/mr6hkgFy/mixboard-image-48.png","https://i.ibb.co/C5Y1ks0k/mixboard-image-49.png","https://i.ibb.co/gMSk1PBm/mixboard-image-50.png","https://i.ibb.co/JjjMLZw0/mixboard-image-51.png","https://i.ibb.co/1G1RcmBb/mixboard-image-52.png","https://i.ibb.co/0jMHC6b6/mixboard-image-53.png","https://i.ibb.co/fGpPyF1t/mixboard-image-54.png","https://i.ibb.co/GQW8GWWw/mixboard-image-55.png","https://i.ibb.co/WWh5Y27H/mixboard-image-56.png","https://i.ibb.co/Hp4Zh20r/mixboard-image-57.png","https://i.ibb.co/pjS5PcCD/mixboard-image-58.png","https://i.ibb.co/q35fM5nJ/mixboard-image-59.png","https://i.ibb.co/Y4NV7grw/mixboard-image-60.png","https://i.ibb.co/RkYC0PV4/mixboard-image-61.png","https://i.ibb.co/LhbsQSDB/mixboard-image-62.png","https://i.ibb.co/4ZDGTXgS/mixboard-image-63.png","https://i.ibb.co/fdnvcGqq/mixboard-image-64.png","https://i.ibb.co/7B4HHky/mixboard-image-65.png","https://i.ibb.co/p6JSqmXr/mixboard-image-66.png","https://i.ibb.co/J9kxNLn/mixboard-image-67.png","https://i.ibb.co/6RTCnfPH/mixboard-image-68.png","https://i.ibb.co/wFmcVXmf/mixboard-image-69.png","https://i.ibb.co/GQKt9G9m/mixboard-image-71.png","https://i.ibb.co/ym2LDbWc/mixboard-image-72.png","https://i.ibb.co/fGBddskr/mixboard-image-73.png","https://i.ibb.co/23vry85M/mixboard-image-74.png","https://i.ibb.co/TDfh2Vc2/mixboard-image-75.png","https://i.ibb.co/hFsQZPTb/mixboard-image-76.png","https://i.ibb.co/SXKfdWsx/mixboard-image-77.png","https://i.ibb.co/0pHGfmdS/mixboard-image-78.png","https://i.ibb.co/WWGL1QcG/mixboard-image-79.png"
];

const parsePrice = (s) => parseFloat(String(s).replace(/[^
\d.]/g, "")) || 0;

const rawButcher = [
  {section:"beef",title:"اللحوم البقري",titleEn:"Beef",items:[
    {ar:"انتركوت",en:"Entrecôte",price:"75 درهم",img:I[0]},{ar:"مكعبات لحم",en:"Beef Cubes",price:"60 درهم",img:I[1]},{ar:"لحم مفروم",en:"Minced Meat",price:"60 درهم",img:I[2]},{ar:"روستو",en:"Roast Beef",price:"60 درهم",img:I[3]},{ar:"بيكاتا",en:"Piccata",price:"60 درهم",img:I[4]},{ar:"بوفتيك",en:"Buftek",price:"60 درهم",img:I[5]},{ar:"بيف استروجانوف",en:"Beef Stroganoff",price:"60 درهم",img:I[6]},{ar:"شاورما اللحم",en:"Meat Shawarma",price:"60 درهم",img:I[7]},{ar:"فيليه أستيك",en:"Steak Fillet",price:"115 درهم",img:I[8]},{ar:"كبدة بقري",en:"Sliced Liver",price:"58 درهم",img:I[9]},{ar:"ريش بتلو",en:"Beef Chops",price:"80 درهم",img:I[10]},{ar:"ريب آي",en:"Ribeye",price:"75 درهم",img:I[11]},{ar:"موزة بقري بدون عظم",en:"Beef Shank boneless",price:"60 درهم",img:I[12]},{ar:"موزة بقري بالعظم",en:"Beef Shank with bone",price:"58 درهم",img:I[13]},{ar:"كبدة إسكندراني",en:"Alexandrian Liver",price:"58 درهم",img:I[14]},{ar:"رقبة بتلو",en:"Neck Beef",price:"58 درهم",img:I[15]},{ar:"عكاوي",en:"Oxtail",price:"42 درهم",img:I[16]},{ar:"كوارع",en:"Trotters",price:"35 درهم",img:I[17]}
  ]},
  {section:"naimi",title:"لحوم ضاني نعيمي",titleEn:"Naimi Lamb",items:[
    {ar:"موزة ضاني نعيمي",en:"Naimi Lamb Shank",price:"69 درهم",img:I[18]},{ar:"كتف ضاني نعيمي",en:"Naimi Lamb Shoulder",price:"68 درهم",img:I[19]},{ar:"ريش ضاني نعيمي",en:"Naimi Lamb Chops",price:"115 درهم",img:I[20]},{ar:"خروف نعيمي بدون عظم",en:"Naimi Lamb boneless",price:"79 درهم",img:I[21]},{ar:"فخذة ضاني نعيمي",en:"Naimi Lamb Leg",price:"68 درهم",img:I[22]},{ar:"رقبة ضاني نعيمي",en:"Naimi Lamb Neck",price:"68 درهم",img:I[23]}
  ]},
];

export default function AlNileGourmet() {
  // Component implementation here
  return <div>Al-Nile Gourmet App</div>;
}