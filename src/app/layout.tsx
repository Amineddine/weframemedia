import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Noise from "@/components/ui/noise";


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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        {/* Site-wide film grain — sits BEHIND content. Section backgrounds are
            transparent so the grain shows through behind text/empty areas, while
            opaque media (videos, images) naturally blocks it. The homepage hero
            is the exception: it paints its own grain on top of its video. */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <Noise patternAlpha={6} />
        </div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
