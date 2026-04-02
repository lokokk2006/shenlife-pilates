export interface PricingPlan {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  highlight?: boolean;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "體驗課",
    price: "NT$ 500",
    priceNote: "首堂優惠價",
    description: "第一次來身活？先來體驗一堂，感受器械皮拉提斯的魅力。",
    features: [
      "60 分鐘 1 對 1 體驗",
      "專業身體評估",
      "Reformer 基礎教學",
      "個人化建議",
    ],
    cta: "預約體驗",
  },
  {
    name: "單堂課",
    price: "NT$ 1,500",
    priceNote: "起",
    description: "彈性選擇，按堂計費，適合時間不固定的你。",
    features: [
      "50 分鐘課程",
      "自由選擇課程類型",
      "1 對 1 或小班制",
      "可指定教練",
    ],
    cta: "了解更多",
  },
  {
    name: "月方案",
    price: "NT$ 4,800",
    priceNote: "起 / 月",
    description: "每週固定訓練，養成運動習慣，效果最顯著。",
    features: [
      "每月 4 堂課",
      "固定時段預約",
      "專屬訓練計畫",
      "進度追蹤紀錄",
      "優先預約權",
    ],
    highlight: true,
    cta: "立即諮詢",
  },
  {
    name: "堂數方案",
    price: "NT$ 12,000",
    priceNote: "起 / 10 堂",
    description: "一次購買多堂，享有更優惠的價格，彈性使用。",
    features: [
      "10 / 20 / 30 堂可選",
      "使用期限 3-6 個月",
      "自由預約時段",
      "可轉讓 1 次",
    ],
    cta: "了解更多",
  },
];
