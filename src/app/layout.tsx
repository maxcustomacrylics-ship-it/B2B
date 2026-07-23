import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | AcrylicPro Custom",
    default: "AcrylicPro Custom — B2B Acrylic Board Customization Services",
  },
  description:
    "Professional B2B acrylic board customization service — precision manufacturing, custom cutting, UV printing, and global shipping. ISO certified factory with 15+ years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased">
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-L3EWMCRBGS" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-L3EWMCRBGS');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
