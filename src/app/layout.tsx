import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createSiteMetadata } from "@/lib/site-metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = createSiteMetadata({
  title: "R3WORKED | Premium Website Uplift",
  description:
    "R3WORKED reworks underperforming digital fronts through sharper websites, cleaner lead capture, and smarter follow-up.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
