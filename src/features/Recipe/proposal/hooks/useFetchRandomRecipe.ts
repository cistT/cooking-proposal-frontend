import { useState, useEffect } from 'react'

import { Recipe } from 'features/Recipe'
import { trpc } from 'utiles/trpc'

type UseFetchRandomRecipe = () => {
  recipe?: Recipe
  isLoading: boolean
  refetchRecipe: () => Promise<void>
}

export const useFetchRandomRecipe: UseFetchRandomRecipe = () => {
  const res = trpc.fetchRandomRecipe.useQuery()

  const isLoading = res.isLoading
  const recipe = res?.data?.recipe
  const refetchRecipe = async () => {
    await res.refetch()
  }

  return { recipe, isLoading, refetchRecipe }
}
