import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const headingFont = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zachary Ndegwa | Next.js Developer & Designer",
  description:
    "Award-level portfolio experience for Zachary Ndegwa, a web developer and designer based in Ruiru Kamakis, Kenya.",
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
