import type { Metadata } from "next";
import { Noto_Sans_TC, Noto_Serif_TC, Lora, Raleway } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SITE } from "@/lib/constants";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} 皮拉提斯 | 台南專業器械皮拉提斯`,
    template: `%s | ${SITE.name} 皮拉提斯`,
  },
  description: SITE.description,
  keywords: [
    "皮拉提斯",
    "台南皮拉提斯",
    "器械皮拉提斯",
    "Reformer",
    "Pilates",
    "身活",
    "台南運動",
  ],
  openGraph: {
    title: `${SITE.name} 皮拉提斯 | 台南專業器械皮拉提斯`,
    description: SITE.description,
    url: SITE.url,
    siteName: `${SITE.name} 皮拉提斯`,
    locale: "zh_TW",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "身活皮拉提斯",
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "東橋五路112號",
    addressLocality: "永康區",
    addressRegion: "台南市",
    addressCountry: "TW",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${notoSansTC.variable} ${notoSerifTC.variable} ${lora.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
