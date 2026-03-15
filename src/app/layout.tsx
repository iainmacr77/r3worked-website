import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hey Lola | Voice Layer for Real-World Operations",
  description:
    "Hey Lola is the voice operating layer for real-world operations, starting with restaurants and medical.",
};

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
