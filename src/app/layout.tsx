import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Schema from "@/components/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIRT Bhopal Admissions 2025 – Apply for B.Tech, M.Tech, MBA, MCA",
  description:
    "Apply online for Sagar Institute of Research & Technology (SIRT), Bhopal admissions 2025–26. Check dates, eligibility, fees, and top national rankings.",
  keywords: [
    "SIRT Bhopal",
    "SIRT admissions",
    "Engineering college Bhopal",
    "MBA admission 2025",
    "M.Tech admission 2025",
    "NAAC A grade engineering college",
  ],
  metadataBase: new URL("https://www.sirtbhopal.ac.in"),
  openGraph: {
    title: "SIRT Bhopal Admissions 2025",
    description:
      "Join Sagar Institute of Research & Technology (SIRT), Bhopal — NAAC A-grade, NBA-accredited. Admissions open for B.Tech, M.Tech, MBA & MCA.",
    url: "https://www.sirtbhopal.ac.in/admissions",
    siteName: "SIRT Bhopal",
    images: [
      {
        url: "https://www.sirtbhopal.ac.in/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SIRT Bhopal Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIRT Bhopal Admissions 2025",
    description:
      "Apply now for UG & PG courses at SIRT Bhopal. Check fees, eligibility, dates and top rankings.",
    images: ["https://www.sirtbhopal.ac.in/assets/twitter-card.jpg"],
  },
  alternates: {
    canonical: "https://www.sirtbhopal.ac.in/admissions",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Schema/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex flex-col min-h-screen">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
