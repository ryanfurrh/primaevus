import Link from "next/link";
import "../styles/globals.css";
import { GlobalNav } from "@/components/GlobalNav";
import { NavHeader } from "@/components/NavHeader";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { IBM_Plex_Mono } from "next/font/google";

export const metadata = {
  title: "Prīmaevus",
  description: "Generated by Next.js",
};

const ibm = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ibm.variable}`}>
      <head />
      <body className="font-mono">
        <div className="flex flex-row w-screen h-full">
          <div className="fixed w-48 ml-4 mt-4">
            <div className="flex flex-col z-10 border-stone-200 border-2">
              <NavHeader />
              <GlobalNav />
      <body
        className="font-mono overflow-y-scroll"
        style={{ WebkitFontSmoothing: "none" }}
      >
          <div className="flex flex-col min-h-screen justify-between">
            <div className="">{children}</div>
            <div className="">
              <Footer />
            </div>
          </div>
          <div className="flex flex-col h-full max-w-screen content-between">
            <div className="flex flex-col h-full min-h-48">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
