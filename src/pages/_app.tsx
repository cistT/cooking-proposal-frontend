import type { AppProps } from 'next/app'

import Header from 'components/Header/Header'

import 'modern-css-reset/dist/reset.min.css'

// eslint-disable-next-line require-jsdoc
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
