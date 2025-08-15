import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cleaning 360 | Omaha's Trusted Cleaning Services",
  description:
    "Cleaning 360 provides professional residential and commercial cleaning in Omaha, NE and surrounding areas. Deep cleans, move-in/move-out, Airbnb turnovers, recurring maid service and more.",
  metadataBase: new URL("https://www.example.com"),
  openGraph: {
    title: "Cleaning 360 | Omaha's Trusted Cleaning Services",
    description:
      "Professional residential and commercial cleaning in Omaha, NE and surrounding areas.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
