import Footer from "@/components/Footer";

import "./globals.css"
import Header from "@/components/header/Header";
import MainContainer from "@/components/MainContainer";
// import { Manrope } from "next/font/google"

// const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Snippetopia",
  description:
    "All the React, Next.js, TailwindCSS, and Framer Motion snippets you will ever need.",
  authors: [{ name: "Vidit Khandelwal", url: "https://viditkhandelwal.com" }],
  generator: "Next.js",
  applicationName: "Snippetopia",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Snippetopia",
    "snippets",
    "React",
    "Next.js",
    "TailwindCSS",
    "React.js",
    "Framer",
    "Framer Motion",
    "free",
    "library",
    "collection",
    "components",
    "UI",
    "templates"
  ],
  creator: "Vidit Khandelwal",
  publisher: "Vidit Khandelwal",
  metadataBase: new URL('https://snippetopia.xyz'),
  openGraph: {
    title: 'Snippetopia',
    description: 'All the React, Next.js, TailwindCSS, and Framer Motion snippets you will ever need.',
    url: 'https://snippetopia.xyz',
    siteName: 'Snippetopia',
    images: [
      {
        url: '/snippetopia-og-sm.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <MainContainer>
          <Header />
          {children}
          <Footer />
        </MainContainer>
      </body>
    </html>
  );
}
