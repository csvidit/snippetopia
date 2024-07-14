import "../globals.css";

export const metadata = {
  title: "Brat Collection - Snippetopia",
  description:
    "A collection of snippets and templates inspired by Charli xcx's brat album",
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
    "neon",
    "green",
    "brat",
    "charli xcx",
    "brat collection",
    "cool",
    "edgy",
    "gen z",
    "gen-z",
    "minimalist",
    "von dutch",
    "360",
    "365",
    "club",
    "rave",
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
    title: "Brat Collection - Snippetopia",
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
