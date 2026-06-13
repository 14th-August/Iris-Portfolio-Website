import type { Metadata } from "next";
import { zcool, montserrat } from "./fonts";
import "./globals.css";
import { Navbar } from "../components/web/Navbar";

export const metadata: Metadata = {
  title: "Iris Beauty",
  description: "Makeup artistry portfolio of Hsiang-Ning Yu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${zcool.variable}`}>
      <body className="min-h-full flex flex-col overflow-x-hidden antialiased bg-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
