import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Durga Mohan Pendem | Software Developer & AI/ML Engineer",
  description:
    "Portfolio of Durga Mohan Pendem — a detail-oriented Software Engineering student with experience in building scalable applications using Python, Java, React, and FastAPI. Passionate about AI/ML, system design, and solving real-world problems.",
  keywords: [
    "Durga Mohan Pendem",
    "Software Developer",
    "AI Developer",
    "ML Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "Portfolio",
  ],
  authors: [{ name: "Durga Mohan Pendem" }],
  openGraph: {
    title: "Durga Mohan Pendem | Software Developer & AI/ML Engineer",
    description:
      "Detail-oriented Software Engineering student building scalable applications with Python, Java, React, and FastAPI.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Durga Mohan Pendem | Software Developer & AI/ML Engineer",
    description:
      "Detail-oriented Software Engineering student building scalable applications.",
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
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
