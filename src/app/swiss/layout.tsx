import "../globals.css"

export const metadata = {
  title: "Swiss Collection - Snippetopia",
  description:
    "A ollection of bento-grid design Next.js snippets and templates.",
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
    "templates",
    "swiss",
    "switzerland",
    "grotesk",
    "sans serif",
    "geometric",
    "grotesque",
    "swiss",
    "helvetica",
    "minimalist",
    "single page app",
    "spa",
    "simple",
    "link in bio",
    "linktree",
    "portfolio",
  ],
  creator: "Vidit Khandelwal",
  publisher: "Vidit Khandelwal",
  metadataBase: new URL("https://snippetopia.xyz"),
  openGraph: {
    title: "Swiss Collection - Snippetopia",
    description:
      "All the React, Next.js, TailwindCSS, and Framer Motion snippets you will ever need.",
    url: "https://snippetopia.xyz",
    siteName: "Snippetopia",
    images: [
      {
        url: "/snippetopia-og-sm.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
