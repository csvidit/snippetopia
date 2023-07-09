import './globals.css'

export const metadata = {
  title: 'Snippetopia',
  description: 'All the React, Next.js, TailwindCSS, and Framer Motion snippets you will ever need. Coming Soon.',
  authors: [{name: "Vidit Khandelwal", url: "https://viditkhandelwal.com"}],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
