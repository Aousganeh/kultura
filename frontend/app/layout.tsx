import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kultura - Restoran Rezervasiya Sistemi',
  description: 'Restoran rezervasiyalarını effektiv şəkildə izləyin və idarə edin.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="az">
      <body>{children}</body>
    </html>
  )
}
