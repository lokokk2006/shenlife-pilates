export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  capacity: string;
  level: "初學者" | "初中級" | "中級" | "進階" | "所有程度";
  equipment: string;
  image: string;
  features: string[];
}

export const courses: Course[] = [
  {
    slug: "reformer-core",
    title: "Reformer 核心訓練",
    subtitle: "Core Foundation",
    description:
      "透過 Reformer 器械的彈簧阻力系統，精準啟動深層核心肌群。課程著重骨盆穩定、腹部深層控制，建立身體的力量根基。適合想要改善體態、強化核心的你。",
    duration: "50 分鐘",
    capacity: "1 對 1 / 小班 2-3 人",
    level: "所有程度",
    equipment: "Reformer",
    image: "/images/courses/reformer-core.jpg",
    features: ["深層核心啟動", "骨盆穩定訓練", "呼吸與動作整合", "姿勢矯正"],
  },
  {
    slug: "reformer-sculpt",
    title: "Reformer 體態雕塑",
    subtitle: "Body Sculpting",
    description:
      "結合 Reformer 的多方向阻力訓練，針對全身肌肉線條進行雕塑。從手臂、背部到臀腿，每個動作都在安全的器械輔助下精準發力，打造勻稱有力的身體線條。",
    duration: "50 分鐘",
    capacity: "1 對 1 / 小班 2-3 人",
    level: "初中級",
    equipment: "Reformer",
    image: "/images/courses/reformer-sculpt.jpg",
    features: ["全身肌力訓練", "線條雕塑", "肌耐力提升", "代謝促進"],
  },
  {
    slug: "reformer-spine",
    title: "Reformer 脊椎保健",
    subtitle: "Spine Care",
    description:
      "專為久坐族群和脊椎不適者設計。利用 Reformer 的低衝擊特性，溫和伸展脊椎周圍肌群，改善肩頸緊繃、下背疼痛等問題。在安全的環境下重建脊椎活動度。",
    duration: "50 分鐘",
    capacity: "1 對 1",
    level: "所有程度",
    equipment: "Reformer",
    image: "/images/courses/reformer-spine.jpg",
    features: ["脊椎活動度改善", "肩頸放鬆", "下背痛緩解", "姿勢重建"],
  },
  {
    slug: "private-session",
    title: "1 對 1 私人課",
    subtitle: "Private Session",
    description:
      "量身定制的專屬訓練計畫。教練根據你的身體狀況、目標需求，設計最適合的課程內容。從評估到訓練，每一步都專注在你身上，是最高效的訓練方式。",
    duration: "50 分鐘",
    capacity: "1 對 1",
    level: "所有程度",
    equipment: "Reformer + 輔助器材",
    image: "/images/courses/private-session.jpg",
    features: ["個人化評估", "客製訓練計畫", "專屬教練指導", "進度追蹤"],
  },
  {
    slug: "reformer-intro",
    title: "新手體驗課",
    subtitle: "Intro Experience",
    description:
      "專為第一次接觸皮拉提斯的你設計。教練會詳細介紹 Reformer 器械的使用方式、基礎呼吸法，並透過簡單動作讓你感受皮拉提斯的魅力。輕鬆無壓力，踏出健康的第一步。",
    duration: "60 分鐘",
    capacity: "1 對 1",
    level: "初學者",
    equipment: "Reformer",
    image: "/images/courses/reformer-intro.jpg",
    features: ["器械使用教學", "基礎呼吸訓練", "身體評估", "無壓力體驗"],
  },
];
