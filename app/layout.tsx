import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chao Muang - RedM Community',
  description: 'Chao Muang is Roleplay Community Server on RedM Framework (Red Dead Redemption 2 Video Game)',
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
