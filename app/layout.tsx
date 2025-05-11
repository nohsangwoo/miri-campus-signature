import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'miri campus',
  description: 'miri campus',
  generator: 'miri campus',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
