import Footer from '@/components/Footer/Footer';
import NavbarPage from '@/components/Navigation/Navbar';
import AppProvider from '@/context/AppProvider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hero.io',
  description: 'Hero.io is a social media platform for heroes. It is a social media platform for heroes.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <AppProvider>
        <NavbarPage/>
        <div>{children}</div>
        <Footer/>
        <ToastContainer/>
        </AppProvider>
      </body>
    </html>
  );
}
