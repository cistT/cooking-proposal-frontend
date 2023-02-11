import { getRandomRecipeCategoryID } from './getRandomRecipeCategoryID'

import { RAKUTEN_WEB_SERVICE_APPLICATION_ID } from 'conf'
import { Recipe } from 'features/Recipe'

type FetchRecipe = () => Promise<Recipe>

const createFetchRecipeURL = (appID: string, categoryID: string) => {
  return `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?format=json&applicationId=${appID}&categoryId=${categoryID}`
}

export const fetchRecipe: FetchRecipe = async () => {
  const categoryID = getRandomRecipeCategoryID()
  const url = createFetchRecipeURL(
    RAKUTEN_WEB_SERVICE_APPLICATION_ID,
    categoryID,
  )

  const res = await fetch(url)
  const recipeList = await res.json()
  const recipe = await recipeList.result[
    Math.floor(Math.random() * recipeList.result.length)
  ]

  return {
    id: recipe.recipeId,
    title: recipe.recipeTitle,
    url: recipe.recipeUrl,
    image: recipe.foodImageUrl,
    cost: recipe.recipeCost,
    description: recipe.recipeDescription,
    indication: recipe.recipeIndication,
    material: recipe.recipeMaterial,
  }
}
