import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";
import Navbar from "@/component/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SynthOS",
  description:
    "SynthOS lets you invest in AI-powered personalized crypto yield plans",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
  openGraph: {
    title: "SynthOS",
    description:
      "SynthOS lets you invest in AI-powered personalized crypto yield plans",
    type: "website",
    url: "https://synthos.fun/",
    siteName: "SynthOS",
    locale: "en_US",
    images: [
      {
        url: "https://synthos.fun/og.jpg",
        width: 1200,
        height: 630,
        alt: "SynthOS - AI-powered personalized crypto yield plans",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SynthOS",
    description:
      "SynthOS lets you invest in AI-powered personalized crypto yield plans",
    images: [
      {
        url: "https://synthos.fun/og.jpg",
        alt: "SynthOS - AI-powered personalized crypto yield plans",
      },
    ],
    creator: "@synthos",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/Montserrat-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Montserrat-SemiBold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Montserrat-LightItalic.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/TT-Travels-Next-Trial-Medium.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/TT-Travels-Next-Trial-DemiBold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-montserrat relative`}
      >
        <Header />
        <main className="">{children}</main>
        <Navbar />
        <Footer />
      </body>
    </html>
  );
}
