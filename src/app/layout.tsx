import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hey Lola | Premium Hospitality AI",
  description: "Seamless service starts with Lola. The invisible concierge orchestrating high-end hospitality.",
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
