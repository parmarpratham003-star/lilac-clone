import type { Metadata } from "next";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import "./globals.css";

import Header from "@/Component/Header";
import Footer from "@/Component/Footer";
import Preloader from "@/Component/Preloader";
import PageTransition from "@/Component/PageTransition";

import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lilac",
  description:
    "Luxury Beauty Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     <body className="min-h-full flex flex-col bg-[#f5f1eb]">

  <Providers>

    <Preloader />

    <Header />

    <main className="flex-1">
      {children}
    </main>

    <Footer />

  </Providers>

</body>
    </html>
  );
}