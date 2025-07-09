import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import ContactWidget from "@/components/ContactWidget";

export const runtime = 'edge';

const notoSans = Noto_Sans_KR({ 
  subsets: ["latin"],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "카올(Car All) - 내 차의 모든 것",
  description: "신차, 중고차 정보부터 상세 견적 비교까지. 내 차의 모든 것을 카올에서 만나보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSans.className}>
        {children}
        <ContactWidget />
      </body>
    </html>
  );
} 