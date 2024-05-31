const WEBSITELINK = process.env.NEXT_PUBLIC_PORTFOLIOSITE;
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raumil Dhandhukia",
  description:
    "Full Stack Developer with extensive experience in Web Development and API Development, committed to delivering efficient and scalable solutions.",
  metadataBase: new URL(`${WEBSITELINK}`),
  openGraph: {
    images: "./opengraph-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
