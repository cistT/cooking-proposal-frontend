import { useRouter } from 'next/router'

const useBrowserBack = () => {
  const router = useRouter()
  const browserBack = () => router.back()
  return browserBack
}

export default useBrowserBack
