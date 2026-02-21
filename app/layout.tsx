import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ember — Find Your Voice by the Fire",
  description:
    "Practice speaking 2 minutes a day. Get AI-powered feedback from your personal fox coach. Track your progress as your campfire grows.",
  openGraph: {
    title: "Ember — Find Your Voice by the Fire",
    description:
      "Practice speaking 2 minutes a day. Get AI-powered feedback from your personal fox coach.",
    images: ["/og-image.svg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ember — Find Your Voice by the Fire",
    description:
      "Practice speaking 2 minutes a day. Get AI-powered feedback from your personal fox coach.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${dmSerif.variable} ${jetbrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
