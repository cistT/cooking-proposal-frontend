import { useEffect, useState } from 'react'

import { Contents } from '..'

import { trpc } from 'utiles/trpc'

type UseFetchIdentificationNews = (id: string) => {
  news: Contents | null
  isLoading: boolean
}

export const useFetchIdentificationNews: UseFetchIdentificationNews = (id) => {
  const res = trpc.fetchNewsList.useQuery(
    { id },
    {
      cacheTime: 60000,
    },
  )
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (res.data) {
      setIsLoading(false)
    }
  }, [res])

  const news = res.data?.newsList[0] ?? null

  return { news, isLoading }
}
