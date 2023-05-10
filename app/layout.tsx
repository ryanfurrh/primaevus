import "../styles/globals.css";
import { GlobalNav } from "@/components/GlobalNav";
import { NavHeader } from "@/components/NavHeader";
import { Footer } from "@/components/Footer";
import {
  Archivo,
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Orbitron,
} from "next/font/google";
import localFont from "next/font/local";

export const metadata = {
  title: "Prīmaevus",
  description: "Generated by Next.js",
  icons: {
    icon: { url: "public/favicon.png", type: "image/png" },
  },
};

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const marvin = localFont({
  src: "../public/fonts/MarvinVisionsBig-Bold.woff2",
  variable: "--font-marvin",
  weight: "800",
});

const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm",
  weight: ["100", "200", "300", "400", "500", "600", "700"],

  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${ibm.variable} ${archivo.variable} ${marvin.variable} ${plexSans.variable} ${orbitron.variable}  font-ibm`}
    >
      <body
        className="flex flex-col h-screen bg-sand-100 font-ibm"
        style={{ WebkitFontSmoothing: "none" }}
      >
        <header className="z-10 flex border-2 md:fixed md:flex-col border-sand-400 font-ibm">
          <NavHeader />
          <GlobalNav />
        </header>
        <main className="flex flex-col flex-1 overflow-y-scroll md:pl-56">
          <div className="flex justify-center flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
