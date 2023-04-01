import Link from "next/link";
import "../styles/globals.css";
import { GlobalNav } from "@/components/GlobalNav";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="mx-auto max-w-2xl px-4">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
