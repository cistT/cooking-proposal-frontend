import { useEffect, useState } from 'react'

import Recipe from './Recipe'
import { fetchFavoriteRecipes } from './operateFavoriteRecipe'

import { UID } from 'features/Auth/UID'

const useFavoriteRecipes = (uid: UID) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([])
  const [finishedFetch, setFinishedFetch] = useState(false)
  useEffect(() => {
    ;(async () => {
      if (uid) {
        const recipe = await fetchFavoriteRecipes(uid)
        setFavoriteRecipes(recipe)
      }
      setFinishedFetch(true)
    })()
  }, [uid])

  return {
    finishedFetch,
    favoriteRecipes,
  }
}

export default useFavoriteRecipes
