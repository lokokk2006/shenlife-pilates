export const SITE = {
  name: "身活",
  nameEn: "SHENLIFE",
  tagline: "感受身體，活出自己",
  description:
    "身活皮拉提斯 — 台南專業器械皮拉提斯教室。透過 Reformer 訓練，找回身體的平衡與力量。",
  url: "https://shenlife.tw",
  lineUrl: "https://line.me/R/ti/p/@shenlife", // TODO: 替換為實際 LINE 官方帳號連結
  lineId: "@shenlife", // TODO: 替換為實際 LINE ID
  phone: "06-XXX-XXXX", // TODO: 替換為實際電話
  email: "hello@shenlife.tw", // TODO: 替換為實際 Email
  instagram: "https://www.instagram.com/shenlife_pilates", // TODO: 替換
  facebook: "https://www.facebook.com/shenlife.pilates", // TODO: 替換
} as const;

export const STORE = {
  name: "身活皮拉提斯 台南館",
  city: "台南市",
  address: "台南市○○區○○路○○號", // TODO: 替換為實際地址
  googleMapsUrl: "", // TODO: 替換為實際 Google Maps 連結
  openHours: {
    weekday: "10:00 - 21:00",
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
