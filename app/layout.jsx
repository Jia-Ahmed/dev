
import { Geist, Geist_Mono } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import './globals.css'
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/animations/PageTransition';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'DevXoft - Your Development Partner',
  description: 'Professional web development services'
}
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <body className={`${geistSans.className} ${geistMono.variable} antialiased bg-background text-foreground transition-colors duration-300`} >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem
        >

          <Header/>
          <main>
            <PageTransition>
             {children}
             </PageTransition>
          </main>
         <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}



