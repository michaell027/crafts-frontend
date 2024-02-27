import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Locale, i18n } from "@/../i18n.config";

import Header from "@/components/Header";
import { getDictionary } from "@/lib/dictionary";
import DictionaryProvider from "@/providers/dictionary-provider";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticProps() {
  return i18n.locales.map((locale: Locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang} className="">
      <body className={"bg-white text-gray-950 w-full min-h-screen"}>
        <DictionaryProvider dictionary={dictionary}>
          <Header />
          <div className={"flex-row"}>
            <LeftSidebar />
            {children}
            <RightSidebar />
          </div>
        </DictionaryProvider>
      </body>
    </html>
  );
}
