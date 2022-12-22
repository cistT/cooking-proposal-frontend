import type { AppProps } from 'next/app'
import { createContext, useState } from 'react'

import 'modern-css-reset/dist/reset.min.css'

import Layout from 'components/Layout/Layout'
import { Contents } from 'features/News/News'

export const NewsContentsContext = createContext<Contents[] | null>(null)

export const NewsContext = createContext<(contents: Contents[]) => void>(
  (contents) => undefined,
)

// eslint-disable-next-line require-jsdoc
export default function App({ Component, pageProps }: AppProps) {
  const [newsContents, setNewsContents] = useState<Contents[] | null>(null)
  const temporarilySavedNewsContents = (contents: Contents[]) => {
    setNewsContents(contents)
  }

  return (
    <NewsContentsContext.Provider value={newsContents}>
      <NewsContext.Provider value={temporarilySavedNewsContents}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NewsContext.Provider>
    </NewsContentsContext.Provider>
  )
}
