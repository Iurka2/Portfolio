import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Heder from './heder'
import { Toaster } from 'react-hot-toast'
import { ParallaxProvider } from 'react-scroll-parallax'
import localFont from '@next/font/local'

// Font files can be colocated inside of `pages`
const chillax = localFont({
  src: [
    {
      path: './ChillFont/Chillax-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './ChillFont/Chillax-Extralight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './ChillFont/Chillax-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './ChillFont/Chillax-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './ChillFont/Chillax-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './ChillFont/Chillax-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './ChillFont/Chillax-Variable.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <>
    <ParallaxProvider>
    <Toaster />
    <main className={chillax.className}>
    <Heder />
  <Component {...pageProps} />
  </main>
  </ParallaxProvider>
  </>
  )
}
