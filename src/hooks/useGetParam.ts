import { useRouter } from 'next/router'

const useGetParam = () => {
  const router = useRouter()
  const query = router.query
  const param: string = query.id as string

  return { param }
}

export default useGetParam
