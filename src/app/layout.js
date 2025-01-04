import { Inter } from 'next/font/google'
import 'antd/dist/reset.css'  // Add Ant Design CSS reset
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TableEase - Instant Restaurant Reservations',
  description: 'Book your perfect dining experience in seconds',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}