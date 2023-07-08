import '@styles/globals.scss'
import '@styles/bootstrap.scss'
import { Raleway } from 'next/font/google'
import { DESC, NAME } from '@/typescript/constants'
import Script from 'next/script'

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
  "generator": "You're Not Newsworthy & Next 13",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script id="toggleTheme">
						{
							`if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
								document.body.setAttribute('data-bs-theme', 'dark')
							} else {
								document.body.setAttribute('data-bs-theme', 'light')
							}`
						}
					</Script>
      <body className={rw.className}>{children}</body>
    </html>
  )
}
