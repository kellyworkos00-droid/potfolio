import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-zachary.vercel.app";

const headingFont = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Zachary Ndegwa | Full-Stack Developer in Kenya",
  description:
    "Zachary Ndegwa is a full-stack developer in Kenya based in Ruiru Kamakis. I build premium websites, e-commerce platforms, and scalable web applications with Next.js, APIs, and modern backend systems.",
  keywords: [
    "full-stack developer in Kenya",
    "web developer Kenya",
    "Next.js developer Kenya",
    "frontend developer Kenya",
    "backend developer Kenya",
    "Ruiru web developer",
    "ecommerce developer Kenya",
    "website designer Kenya",
  ],
  authors: [{ name: "Zachary Ndegwa" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    title: "Zachary Ndegwa | Full-Stack Developer in Kenya",
    description: "Premium full-stack web development, e-commerce systems, and modern product experiences built in Kenya.",
    url: "/",
    siteName: "Zachary Ndegwa Portfolio",
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: "/images/zach.jpeg",
        width: 800,
        height: 1000,
        alt: "Zachary Ndegwa - Full-Stack Developer in Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zachary Ndegwa | Full-Stack Developer in Kenya",
    description: "I build premium full-stack websites, e-commerce platforms, and scalable digital products.",
    images: ["/images/zach.jpeg"],
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
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
