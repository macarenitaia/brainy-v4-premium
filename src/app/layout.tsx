import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SpotlightCursor from "@/components/ui/SpotlightCursor";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatAgent from "@/components/chat/ChatAgent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "brAIny | Agentes de IA que Venden por Ti",
  description: "Agencia de Inteligencia Artificial líder en España. Construimos empleados digitales que no duermen, no se quejan y multiplican tu ROI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased noise-overlay`}
      >
        <SpotlightCursor />
        <Navbar />
        {children}
        <Footer />
        <ChatAgent />
      </body>
    </html>
  );
}
