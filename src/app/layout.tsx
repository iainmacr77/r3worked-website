import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { createSiteMetadata } from "@/lib/site-metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = createSiteMetadata({
  title: "R3WORKED | Lead Rescue for Trades & Local Service Businesses",
  description:
    "R3WORKED helps trades and local service businesses stop losing enquiries with website lead capture, WhatsApp/email alerts, lead logging and review follow-up.",
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
