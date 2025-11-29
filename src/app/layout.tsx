import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import ClientAppProvider from "@/components/client/ClientAppProvider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digrowfa",
  description: "The all-in-one platform for modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${inter.variable} antialiased`}
      >
        <ClientAppProvider>
          {children}
        </ClientAppProvider>

      </body>
    </html>
  );
}
