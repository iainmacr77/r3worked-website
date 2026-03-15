import type { Metadata } from "next";
import "./globals.css";
import { createSiteMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createSiteMetadata({
  title: "Hey Lola | One Voice Layer for Real-World Operations",
  description:
    "Hey Lola is the voice operating layer for real-world operations, live today in restaurants and medical.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
