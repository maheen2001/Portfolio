import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Maheen Laeeq | Full Stack Developer",
  description: "Full Stack Developer crafting elegant digital experiences with modern technologies. Specializing in React, Next.js, Node.js, and more.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "Node.js", "Portfolio"],
  authors: [{ name: "Maheen Laeeq" }],
  openGraph: {
    title: "Maheen Laeeq | Full Stack Developer",
    description: "Full Stack Developer crafting elegant digital experiences with modern technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className={inter.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
