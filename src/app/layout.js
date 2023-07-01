import Header from '@/components/largeComponents/Header'
import './globals.css'
import { Roboto } from 'next/font/google'
import Footer from '@/components/largeComponents/Footer'

const roboto = Roboto({ subsets: ['latin'] ,weight : ['300'] })

export const metadata = {
  title: 'GRUB24',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}