import type { Metadata } from "next";
import { profile } from "@/data/profile";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EasterEgg from "@/components/EasterEgg";
import BootSequence from "@/components/BootSequence";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: `${profile.name}, ${profile.role}. Database administration and full-stack development.`,
  metadataBase: new URL("https://my-portfolio-weld-eight-77.vercel.app"),
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
        <BootSequence />
        <div className="pointer-events-none fixed inset-0 cyber-grid" />
        <div className="pointer-events-none fixed inset-0 aurora-field" />
        <div className="relative z-10 flex min-h-screen flex-col text-term-fg">
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
