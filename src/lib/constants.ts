export const SITE = {
  name: "身活",
  nameEn: "Body Pilates",
  tagline: "感受身體，活出自己",
  description:
    "身活皮拉提斯 — 台南專業器械皮拉提斯教室。透過 Reformer 訓練，找回身體的平衡與力量。",
  url: "https://shenlife.tw",
  lineUrl: "https://line.me/R/ti/p/@853wvbka",
  lineId: "@853wvbka",
  lineQrCode: "https://qr-official.line.me/gs/M_853wvbka.png",
  phone: "06-3026779",
  instagram: "https://www.instagram.com/body_pilates2026",
  facebook: "https://www.facebook.com/shenlife.pilates", // TODO: 替換為實際連結
} as const;

export const STORE = {
  name: "身活皮拉提斯",
  city: "台南市",
  district: "永康區",
  address: "台南市永康區東橋五路112號",
  googleMapsUrl: "https://maps.app.goo.gl/ThaorKa2ND9Dohqe8",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836!2d120.2336443!3d23.0208989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e772684e0873d%3A0x7426b68d2cb82f!2z6Ie65Y2X5biC5rC45bq35Y2A5p2x5qmL5LqU6Lev112!5e0!3m2!1szh-TW!2stw",
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
  { label: "門市位置", href: "/contact" },
] as const;
