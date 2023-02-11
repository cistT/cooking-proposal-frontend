import { useEffect, useState } from 'react'

import { Recipe } from 'features/Recipe'
import { trpc } from 'utiles/trpc'

type UseFetchFavoriteRecipeList = (userID: string) => {
  favoriteRecipeList: Recipe[]
  isLoading: boolean
}

export const useFetchFavoriteRecipeList: UseFetchFavoriteRecipeList = (
  userID,
) => {
  const res = trpc.fetchFavoriteRecipeList.useQuery(
    { userID },
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
  const favoriteRecipeList = res.data?.favoriteRecipeList ?? []

  return { favoriteRecipeList, isLoading }
}
