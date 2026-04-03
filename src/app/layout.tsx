import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Zachary Ndegwa | Award-Winning Web Designer & Developer in Kenya",
  description:
    "Award-level portfolio website for Zachary Ndegwa, a web developer and designer based in Ruiru Kamakis, Kenya. Specializing in Next.js, 3D interactions, and high-performance design.",
  keywords: "web design, web development, Next.js, kenya, portfolio, UI UX",
  authors: [{ name: "Zachary Ndegwa" }],
  openGraph: {
    title: "Zachary Ndegwa | Web Designer & Developer",
    description: "Award-winning web design and development services based in Kenya",
    type: "website",
    locale: "en_KE",
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
