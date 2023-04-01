import Link from "next/link";
import "../styles/globals.css";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footer = (
    <footer>
      <div className=" bg-stone-200 py-6 mt-6 text-center text-stone-300 italic">
        <h3>from the primordium</h3>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <head />
      <body>
        <div className="mx-auto max-w-2xl px-4">
          <Header />
          {children}
          <div className="inset-x-0 bottom-0 bg-white">{footer}</div>
        </div>
      </body>
    </html>
  );
}
