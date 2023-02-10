import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Heder from './heder'
import { Toaster } from 'react-hot-toast'
import { ParallaxProvider } from 'react-scroll-parallax'


export default function App({ Component, pageProps }: AppProps) {
  return( 
    <>
    <ParallaxProvider>
    <Toaster />
    <Heder />
  <Component {...pageProps} />
  </ParallaxProvider>
  </>
  )
}
