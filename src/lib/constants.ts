export const SITE = {
  name: "身活",
  nameEn: "Body Pilates",
  tagline: "感受身體，活出自己",
  description:
    "身活皮拉提斯 — 台南專業器械皮拉提斯教室。透過 Reformer 訓練，找回身體的平衡與力量。",
  url: "https://shenlife.tw",
  lineUrl: "https://line.me/R/ti/p/@853wvbka",
  lineId: "@853wvbka",
  phone: "06-3026779",
  instagram: "https://www.instagram.com/shenlife_pilates", // TODO: 替換為實際連結
  facebook: "https://www.facebook.com/shenlife.pilates", // TODO: 替換為實際連結
} as const;

export const STORE = {
  name: "身活皮拉提斯",
  city: "台南市",
  district: "永康區",
  address: "台南市永康區東橋五路112號",
  googleMapsUrl: "https://maps.google.com/?q=台南市永康區東橋五路112號",
  parking: "附近有東橋五路二號公園停車場、康橋商場停車場",
  openHours: {
    weekday: "09:00 - 22:00",
    saturday: "09:00 - 18:00",
    sunday: "公休",
  },
} as const;

export const NAV_ITEMS = [
  { label: "關於身活", href: "/about" },
  { label: "課程介紹", href: "/courses" },
  { label: "師資團隊", href: "/instructors" },
  { label: "價格方案", href: "/pricing" },
  { label: "部落格", href: "/blog" },
  { label: "常見問題", href: "/faq" },
  { label: "聯絡我們", href: "/contact" },
] as const;
