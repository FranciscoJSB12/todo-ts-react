import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'todo-app',
  description: 'React + TypeScript',
}

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '700']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        {children}
      </body>
    </html>
  )
}
