import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#041562",
};
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UT Solutions PLC | #1 IT Infrastructure Company in Ethiopia",
  description:
    "UT Solutions PLC is Ethiopia's #1 enterprise IT company since 2013. Tier III data center design & build, Cisco enterprise networking, cybersecurity, cloud infrastructure, and 24/7 managed IT services in Addis Ababa. Serving 500+ enterprises across East Africa.",
  keywords: [
    "IT company Ethiopia",
    "data center Ethiopia",
    "enterprise networking",
    "cybersecurity Ethiopia",
    "cloud infrastructure",
    "managed IT services",
    "UT Solutions PLC",
  ],
  openGraph: {
    title: "UT Solutions PLC | #1 IT Infrastructure Company in Ethiopia",
    description:
      "Ethiopia's #1 enterprise IT company since 2013. Tier III data center, Cisco networking, cybersecurity, cloud, and managed IT services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
