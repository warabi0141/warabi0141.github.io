import type { Metadata } from 'next';
import { sawarabiMicho } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | warabi',
    default: 'warabi'
  },
  description: 'Welcome to my portfolio!',
  creator: 'warabi'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp">
      <body className={sawarabiMicho.className}>{children}</body>
    </html>
  )
}
