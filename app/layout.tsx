import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 border-b border-black-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <span className="text-2xl text-gray-900 font-semibold">𝓪𝓵𝓲𝓻𝓮𝔃𝓪 𝓰𝓱𝓪𝓯𝓯𝓪𝓻.𝓭𝓮𝓿</span>
            <div className="flex space-x-4 text-gray-900">
              <a href="#Home">Home</a>
              <a href="#About">About</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    {children}
    </body>
    </html>
  )
}
