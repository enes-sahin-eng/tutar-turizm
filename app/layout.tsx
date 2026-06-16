import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tutar Turizm | Güvenilir Plaj ve Ulaşım Servisi",
  description:
    "Tutar Turizm ile İstanbul Avrupa Yakası'ndan kadınlara özel plaj ve aile plajlarına konforlu, güvenilir ve uygun fiyatlı gidiş-dönüş ulaşım hizmeti.",
  keywords: [
    "Tutar Turizm",
    "Kadınlar Plajı Servisi",
    "Aile Plajı Servisi",
    "Avrupa Yakası Plaj Servisi",
    "İstanbul Plaj Turu",
    "VIP Ulaşım",
    "yaz tatili",
    "günübirlik plaj turları",
    "İstanbul deniz servisi",
    "hafta sonu plaj turu",
    "bayanlar plajı ulaşım",
    "deniz turları",
    "günübirlik yaz tatili",
    "İstanbul plajları ulaşım",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
