import '@styles/globals.scss'
import '@styles/bootstrap.scss'
import { Raleway } from 'next/font/google'
import { DESC, NAME } from '@/typescript/constants'

const rw = Raleway({
    subsets: ['latin'], 
    weight: "variable", 
    style: [
      'normal',
      'italic',
    ],
    adjustFontFallback: true,
})

export const metadata = {
  title: NAME,
  description: DESC,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rw.className}>{children}</body>
    </html>
  )
}
