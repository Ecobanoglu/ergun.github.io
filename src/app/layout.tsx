import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header, ProfileCard } from "@/components";

import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

export const metadata: Metadata = {
  title: "Front End Developer | Ergün Çobanoğlu",
  description:
    "Front-end developer olarak 10 yıllık deneyimimle, projenizi başarıya ulaştırmak için gerekli bilgi ve becerileri edindim ve yenilikçi projelere katkıda bulunmak için fırsatlar arıyorum.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` bg-gray-200/30 text-gray-600 dark:bg-[#0f1629] dark:text-gray-400`}
      >
        <Header />
        <div className="max-w-screen-xl px-3 md:px-4 lg:px-8 mx-auto pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-9 gap-4 lg:gap-x-6">
            <div className="lg:col-span-3">
              <ProfileCard />
            </div>
            <div className="lg:col-span-6">{children}</div>
          </div>
        </div>

        <Analytics />
      </body>
    </html>
  );
}
