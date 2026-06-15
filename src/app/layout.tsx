import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prime Digital Solutions | Technology Consulting & Innovation",
  description:
    "Prime Digital Solutions delivers cutting-edge technology consulting, digital transformation, and software engineering services to enterprises worldwide.",
  keywords: [
    "technology consulting",
    "digital transformation",
    "software engineering",
    "cloud solutions",
    "enterprise software",
  ],
  openGraph: {
    title: "Prime Digital Solutions",
    description:
      "Technology consulting and digital transformation for the modern enterprise.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
