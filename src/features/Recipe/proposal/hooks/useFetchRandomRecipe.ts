import { useState, useEffect } from 'react'

import { Recipe } from 'features/Recipe'
import { trpc } from 'utiles/trpc'

type UseFetchRandomRecipe = () => {
  recipe?: Recipe
  isLoading: boolean
}

export const useFetchRandomRecipe: UseFetchRandomRecipe = () => {
  const res = trpc.fetchRandomRecipe.useQuery(undefined, {})
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (res.data) {
      setIsLoading(false)
    }
  }, [res])

  const recipe = res?.data?.recipe
  // refetchOnWindowFocus: false,
  return { recipe, isLoading }
}
