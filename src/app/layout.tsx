import Footer from "@/components/Footer";
import MainContainer from "@/components/MainContainer";
import Nav from "@/components/Nav";
import "./globals.css";
import {Manrope} from "next/font/google"

const manrope = Manrope({subsets: ["latin"]})

export const metadata = {
  title: "Snippetopia",
  description:
    "All the React, Next.js, TailwindCSS, and Framer Motion snippets you will ever need. Coming Soon.",
  authors: [{ name: "Vidit Khandelwal", url: "https://viditkhandelwal.com" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <MainContainer>
          <Nav />
          {children}
          <Footer />
        </MainContainer>
      </body>
    </html>
  );
}
