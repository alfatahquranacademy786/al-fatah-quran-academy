import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Al Fatah Quran Academy",
  description:
    "Welcome to Al Fatah Quran Academy - Your Trusted Destination for Comprehensive Quranic Learning. Explore our curated courses and expert guidance to enrich your understanding and connection with the Holy Quran. Join a vibrant community dedicated to nurturing spiritual growth and Quranic knowledge. Begin your transformative journey with us today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
