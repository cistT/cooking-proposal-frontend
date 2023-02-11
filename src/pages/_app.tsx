import type { AppProps } from 'next/app'

import 'modern-css-reset/dist/reset.min.css'

import Layout from 'components/Layout/Layout'
import Loading from 'components/Loading/Loading'
import { useGoogleAuth, UIDProvider } from 'features/Auth'
import { trpc } from 'utiles/trpc'

const App = ({ Component, pageProps }: AppProps) => {
  const { uid, isInitializeAuth, login, logout } = useGoogleAuth()

  if (isInitializeAuth) {
    return (
      <UIDProvider value={uid}>
        <Layout uid={uid} login={login} logout={logout}>
          <Component {...pageProps} />
        </Layout>
      </UIDProvider>
    )
  }

  return <Loading />
}

export default trpc.withTRPC(App)
