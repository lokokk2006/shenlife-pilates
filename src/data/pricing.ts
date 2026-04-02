export interface PricingPlan {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  highlight?: boolean;
  cta: string;
}

export interface PricingTier {
  sessions: number;
  perSession: number;
  total: number;
}

export const trialPrice = 1600;

export const pricingTiers: PricingTier[] = [
  { sessions: 12, perSession: 1800, total: 21600 },
  { sessions: 24, perSession: 1700, total: 40800 },
  { sessions: 36, perSession: 1650, total: 59400 },
  { sessions: 48, perSession: 1600, total: 76800 },
  { sessions: 72, perSession: 1500, total: 108000 },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "體驗課",
    price: "NT$ 1,600",
    priceNote: "單堂",
    description: "第一次來身活？先來體驗一堂，感受器械皮拉提斯的魅力。",
    features: [
      "1 對 1 專屬體驗",
      "專業身體評估",
      "Reformer 基礎教學",
      "個人化建議",
    ],
    cta: "預約體驗",
  },
  {
    name: "12 堂方案",
    price: "NT$ 1,800",
    priceNote: "/ 堂",
    description: "入門首選，建立運動習慣的最佳起點。",
    features: [
      "1 對 1 課程",
      "總價 NT$ 21,600",
      "自由預約時段",
      "專屬教練指導",
    ],
    cta: "立即諮詢",
  },
  {
    name: "24 堂方案",
    price: "NT$ 1,700",
    priceNote: "/ 堂",
    description: "穩定訓練，開始感受身體的變化。",
    features: [
      "1 對 1 課程",
      "總價 NT$ 40,800",
      "單堂省 NT$ 100",
      "自由預約時段",
      "專屬教練指導",
    ],
    cta: "立即諮詢",
  },
  {
    name: "36 堂方案",
    price: "NT$ 1,650",
    priceNote: "/ 堂",
    description: "最多人選擇！持續訓練，看見身體的明顯改變。",
    features: [
      "1 對 1 課程",
      "總價 NT$ 59,400",
      "單堂省 NT$ 150",
      "專屬訓練計畫",
      "進度追蹤紀錄",
    ],
    highlight: true,
    cta: "立即諮詢",
  },
  {
    name: "48 堂方案",
    price: "NT$ 1,600",
    priceNote: "/ 堂",
    description: "深度訓練，讓皮拉提斯成為你的生活習慣。",
    features: [
      "1 對 1 課程",
      "總價 NT$ 76,800",
      "單堂省 NT$ 200",
      "專屬訓練計畫",
      "優先預約權",
    ],
    cta: "立即諮詢",
  },
  {
    name: "72 堂方案",
    price: "NT$ 1,500",
    priceNote: "/ 堂",
    description: "最優惠價格，長期投資你的身體健康。",
    features: [
      "1 對 1 課程",
      "總價 NT$ 108,000",
      "單堂省 NT$ 300",
      "專屬訓練計畫",
      "優先預約權",
    ],
    cta: "立即諮詢",
  },
];
