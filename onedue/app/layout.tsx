import Sidebar from './components/Sidebar'
import './globals.css'
import Providers from './util/providers'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Onedue',
  description: 'The productivity app that gets you ahead',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={` ${inter.className}
        flex min-h-screen items-center justify-evenly p-24
        `}>
            <Sidebar />
            {children}
        </body>
      </html>
    </Providers>
  )
}
