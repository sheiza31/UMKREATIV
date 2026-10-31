import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "material-symbols/outlined.css";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UMKREATIV - Solusi Desain & Branding UMKM",
  description: "UMKREATIV adalah platform yang menyediakan berbagai layanan kreatif dan branding untuk membantu UMKM berkembang dan naik kelas.",
};

export default function HomeLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-surface font-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-surface">
        <Header />
        <main className="w-full pt-20 bg-surface">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
