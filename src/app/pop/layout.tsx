import "../globals.css";

export const metadata = {
  title: "Pop Collection - Snippetopia",
  description:
    "A collection of bold colorful Next.js snippets and templates.",
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
    "bright",
    "colorful",
    "bauhaus",
    "modern",
    "colourful",
    "art",
    "artsy",
    "keith haring",
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
    title: "Pop Collection - Snippetopia",
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
