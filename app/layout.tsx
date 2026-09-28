import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MaintenanceGate from "@/app/MaintenanceGate";
import MaintenancePage from "@/app/MaintenancePage";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Website under maintenance | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Aussie Digital Studios is currently making improvements behind the scenes. We will be back online soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <MaintenanceGate
          footer={<Footer />}
          header={<Header />}
          maintenance={<MaintenancePage />}
        >
          {children}
        </MaintenanceGate>
      </body>
    </html>
  );
}
