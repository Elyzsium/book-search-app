import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";
import Header from "@/components/header";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Search App",
  description: "Generated by Book Search App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={'grid h-[100dvh] grid-rows-[auto_1fr_auto]'}>
        <Header />
        <main className={'overflow-auto'}>{children}</main>
      </body>
    </html>
  );
}
