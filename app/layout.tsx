import type { Metadata } from "next";
import { profile } from "@/data/profile";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EasterEgg from "@/components/EasterEgg";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: `${profile.name}, ${profile.role}. Database administration and full-stack development.`,
  metadataBase: new URL("https://shahaatif.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="flex min-h-screen flex-col bg-term-bg text-term-fg">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <EasterEgg />
        <div className="pointer-events-none fixed inset-0 scanlines" />
      </body>
    </html>
  );
}
