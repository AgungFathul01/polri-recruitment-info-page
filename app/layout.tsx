import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Informasi Penerimaan Polri 2026 | Portal Resmi Rekrutmen Kepolisian',
  description: 'Informasi lengkap pendaftaran dan penerimaan anggota Polri tahun 2026. Dapatkan panduan, persyaratan, jadwal, dan tips sukses seleksi Polri.',
  generator: 'v0.app',
  icons: {
    icon: 'https://penerimaan.polri.go.id/assets/front_theme/logo_polri.png',
    apple: 'https://penerimaan.polri.go.id/assets/front_theme/logo_polri.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
