export interface Instructor {
  name: string;
  title: string;
  image: string;
  bio: string;
  certifications: string[];
  specialties: string[];
}

export const instructors: Instructor[] = [
  {
    name: "教練 A",
    title: "資深皮拉提斯教練",
    image: "/images/instructors/instructor-1.jpg",
    bio: "擁有超過 8 年的皮拉提斯教學經驗，專精器械皮拉提斯與脊椎保健。相信每個身體都有無限可能，致力於幫助學員找到屬於自己的身體節奏。",
    certifications: ["STOTT PILATES® 認證", "解剖列車認證", "運動傷害防護員"],
    specialties: ["脊椎保健", "產後恢復", "姿勢矯正"],
  },
  {
    name: "教練 B",
    title: "皮拉提斯教練",
    image: "/images/instructors/instructor-2.jpg",
    bio: "從舞蹈背景轉入皮拉提斯領域，擅長將流動優雅的動作融入訓練中。注重身心連結，讓每堂課不只是運動，更是與身體對話的過程。",
    certifications: ["Balanced Body® 認證", "墊上皮拉提斯認證"],
    specialties: ["體態雕塑", "核心訓練", "柔軟度提升"],
  },
  {
    name: "教練 C",
    title: "皮拉提斯教練",
    image: "/images/instructors/instructor-3.jpg",
    bio: "運動科學背景出身，擅長以科學化的方式設計訓練內容。善於觀察學員的身體狀況，給予精準的動作調整與指導。",
    certifications: ["Polestar Pilates® 認證", "體適能教練 C 級"],
    specialties: ["核心訓練", "運動表現提升", "肌力訓練"],
  },
];
