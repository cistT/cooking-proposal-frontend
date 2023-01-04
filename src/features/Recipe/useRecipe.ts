import { useEffect, useState } from 'react'

import Recipe from './Recipe'
import fetchRecipe from './fetchRecipe'

const useRecipe = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [finishedFetch, setFinishedFetch] = useState(false)
  let ignore = false
  useEffect(() => {
    if (ignore) {
      return
    }
    ;(async () => {
      const recipe = await fetchRecipe()

      if (recipe) {
        setRecipe(recipe)
      }

      setFinishedFetch(true)
    })()

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ignore = true
    }
  }, [])

  return { recipe, finishedFetch }
}

export default useRecipe
