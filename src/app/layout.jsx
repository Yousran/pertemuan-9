import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "A personal portfolio and local project showcase.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[#f5f3ee] font-sans text-[#17251f]">
        <Navbar />
        {children}
        <footer className="flex flex-col justify-between gap-3 border-t border-[#d9ded7] px-6 py-6 text-xs text-[#65716a] sm:flex-row sm:gap-5 lg:px-16">
          <span>© 2026 Ari Pratama</span>
          <span>Designed to make good work easy to find.</span>
        </footer>
      </body>
    </html>
  );
}
