import { Inter } from "next/font/google";
import { Metadata } from "next";
import Pwa from "@/components/Pwa";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

const VERCEL_URL = process.env.VERCEL_URL
  ? new URL(`https://${process.env.VERCEL_URL}`)
  : new URL(`http://localhost:${process.env.PORT || 3000}`);

export const metadata: Metadata = {
  title: process.env.TITLE,
  description: process.env.DESCRIPTION,
  keywords: [
    "Hanif Putra",
    "Portfolio Website",
    "Developer",
    "Designer",
    "Frontend Developer",
    "Fullstack Developer",
    "Web App Developer",
  ],
  authors: [{ name: process.env.AUTHOR, url: VERCEL_URL }],
  creator: process.env.AUTHOR,
  metadataBase: VERCEL_URL,
  alternates: {
    canonical: VERCEL_URL,
  },
  openGraph: {
    title: process.env.TITLE,
    description: process.env.DESCRIPTION,
    url: VERCEL_URL,
    siteName: process.env.TITLE,
    images: [
      {
        url: `${VERCEL_URL}og-image.png`,
        width: 800,
        height: 420,
        alt: process.env.TITLE,
      },
      {
        url: `${VERCEL_URL}og-image.png`,
        width: 1600,
        height: 840,
        alt: process.env.TITLE,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: process.env.TITLE,
    description: process.env.DESCRIPTION,
    creator: process.env.AUTHOR,
    images: {
      url: `${VERCEL_URL}twitter-image.png`,
      alt: process.env.TITLE,
    },
  },
  manifest: `${VERCEL_URL}manifest.json`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Pwa />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
