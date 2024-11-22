import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Navbar} from "@/components/ui/navbar"
import { AppStoreProvider } from "@/providers/app-store-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ReVerse",
  description: "Your go-to Bible study platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950`}
      >
 
 
 
     <AppStoreProvider>
        {/* <Navbar/> */}
        
        
        {children}

      </AppStoreProvider>

      </body>
    </html>
  );
}
