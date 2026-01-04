import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WeFrame Media | Creative Film Production Agency",
  description: "WeFrame Media is a creative film production agency specializing in grounding strategy, brand sentience, cult-creating creative, unreal video, and breath-catching visuals.",
  keywords: ["film production", "video production", "creative agency", "brand films", "commercial production"],
  openGraph: {
    title: "WeFrame Media | Creative Film Production Agency",
    description: "Bending minds to your brands will. A creative kind of agency specializing in video production and visual storytelling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
