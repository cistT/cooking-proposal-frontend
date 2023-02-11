import { useEffect, useState } from 'react'

import { Contents } from '..'

import { trpc } from 'utiles/trpc'

type UseFetchNewsList = () => {
  newsList: Contents[]
  isLoading: boolean
}

export const useFetchNewsList: UseFetchNewsList = () => {
  const res = trpc.fetchNewsList.useQuery(undefined, {
    cacheTime: 60000,
  })
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (res.data) {
      setIsLoading(false)
    }
  }, [res])

  const newsList = res?.data?.newsList ?? []

  return { newsList, isLoading }
}
