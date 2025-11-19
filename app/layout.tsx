import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agencija za registracije i regulatorne usluge',
  description: 'Regulatorne usluge i registracija proizvoda – Vaš pouzdan partner za tržište BiH',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bs">
      <body>{children}</body>
    </html>
  )
}

