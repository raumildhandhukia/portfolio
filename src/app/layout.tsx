import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import GameProvider from "@/components/GameProvider";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

export const metadata: Metadata = {
  title: "Raumil Dhandhukia - 8-Bit Portfolio",
  description: "Retro-style portfolio showcasing my development skills in a gamified experience",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Portfolio", "8-bit", "Retro"],
  authors: [{ name: "Raumil Dhandhukia" }],
  creator: "Raumil Dhandhukia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://raumil.dev",
    title: "Raumil Dhandhukia - 8-Bit Portfolio",
    description: "Retro-style portfolio showcasing my development skills in a gamified experience",
    siteName: "Raumil Dhandhukia Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raumil Dhandhukia - 8-Bit Portfolio",
    description: "Retro-style portfolio showcasing my development skills in a gamified experience",
    creator: "@raumildhandhukia",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pressStart2P.variable} font-mono`}>
        <GameProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
        </GameProvider>
      </body>
    </html>
  );
}
