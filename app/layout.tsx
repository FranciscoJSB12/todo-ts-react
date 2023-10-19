import type { Metadata } from 'next';
import { Roboto } from '@next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'todo-app',
  description: 'React + TypeScript',
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
