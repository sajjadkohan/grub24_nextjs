import Header from '@/components/global/components/header/Header'
import './globals.css'
import { Roboto } from 'next/font/google'
import Footer from '@/components/global/components/Footer/Footer'
import { ViewWrapper } from '@/context/ViewContext'
import LoginModal from '@/components/global/components/LoginModal/LoginModal'
import MerchantContext from '@/context/MerchantContext'
import 'react-phone-number-input/style.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { AuthWrapper } from '@/context/AuthContext'

const roboto = Roboto({ subsets: ['latin'] ,weight : ['300'] })

export const metadata = {
  title: 'GRUB24',
  description: 'Generated by create next app',
}
axios.defaults.withCredentials = true;
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthWrapper>
          <ViewWrapper>
            <MerchantContext>
              <Header/>
              <LoginModal />
                  {children}
              <Footer/>
            </MerchantContext>
          </ViewWrapper>
        </AuthWrapper>
        </body>
    </html>
  )
}
