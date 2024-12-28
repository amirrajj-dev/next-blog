import localFont from 'next/font/local';
import './globals.css';
import ClientSessionProvider from '@/components/Provider';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'نکست بلاگ',
  description: 'توضیحات تستی برای نکست بلاگ',
  icons : {
    icon : 'https://www.svgrepo.com/show/130741/blog.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang='fa-Ir' dir='rtl'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientSessionProvider>
          <Navbar/>  
          {children}
          <Footer/>
          <ToastContainer />
        </ClientSessionProvider>
      </body>
    </html>
  );
}
