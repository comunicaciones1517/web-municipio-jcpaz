import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingChat from "@/components/layout/FloatingChat";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "José C. Paz — Portal Vecinal",
    template: "%s | José C. Paz",
  },
  description:
    "Portal vecinal de José C. Paz con información sobre salud, trámites, transporte y espacios verdes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-gray-50">
        <section style={{ backgroundColor: "#041f3a" }} className="py-3">
          <div className="flex justify-center">
            <div className="relative inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/banner-municipio.jpg`}
                alt="Municipalidad José C. Paz — Intendencia Mario Ishii"
                className="block h-auto"
                style={{ maxHeight: "110px" }}
              />
              <div
                className="absolute bottom-0 right-0"
                style={{ width: "30px", height: "25px", backgroundColor: "#041f3a" }}
              />
            </div>
          </div>
        </section>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}
