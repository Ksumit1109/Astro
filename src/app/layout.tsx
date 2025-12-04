import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import ClientAppProvider from "@/components/client/ClientAppProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Astrology",
  description: "Astrology Prediction and Analysis for your life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        <SpeedInsights />
        <Analytics />
        <ClientAppProvider>{children}</ClientAppProvider>
      </body>
    </html>
  );
}
