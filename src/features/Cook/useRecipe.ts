import { useEffect, useState } from 'react'

import Recipe from './Recipe'
import fetchRecipeList from './fetchRecipeList'
import getRandomRecipeCategoryID from './getRandomRecipeCategoryID'

const useRecipe = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [finishedFetch, setFinishedFetch] = useState(false)

  useEffect(() => {
    ;(async () => {
      const categoryID = getRandomRecipeCategoryID()
      const recipeList = await fetchRecipeList(categoryID)

      if (recipeList.result) {
        const recipe =
          recipeList.result[
            Math.floor(Math.random() * recipeList.result.length)
          ]
        setRecipe(recipe)
      }
    })()

    setFinishedFetch(true)
  }, [])

  return { recipe, finishedFetch }
}

export default useRecipe
