import type { AppProps } from 'next/app'
import { createContext, useState } from 'react'

import 'modern-css-reset/dist/reset.min.css'

import Layout from 'components/Layout/Layout'
import Loading from 'components/Loading/Loading'
import UIDProvider from 'features/Auth/UIDProvider'
import useGoogleAuth from 'features/Auth/useGoogleAuth'
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

  const { uid, isInitializeAuth, login, logout } = useGoogleAuth()

  return (
    <>
      {isInitializeAuth ? (
        <NewsContentsContext.Provider value={newsContents}>
          <NewsContext.Provider value={temporarilySavedNewsContents}>
            <UIDProvider value={uid}>
              <Layout uid={uid} login={login} logout={logout}>
                <Component {...pageProps} />
              </Layout>
            </UIDProvider>
          </NewsContext.Provider>
        </NewsContentsContext.Provider>
      ) : (
        <Loading />
      )}
    </>
  )
}
