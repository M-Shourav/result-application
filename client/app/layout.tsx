import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import { Toaster } from "react-hot-toast";
import TopHeader from "@/components/TopHeader";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavbarWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chilahati Merchant's High School",
  description:
    "Check your Chilahati Merchant's High School Annual Result 2025 instantly. Enter your roll, class, and section to view subject-wise marks, grades, and download printable results online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased primary-color`}
      >
        <Navbar />
        <TopHeader />
        <Header />
        {children}
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#000000",
              color: "#ffffff",
            },
          }}
        />
      </body>
    </html>
  );
}
