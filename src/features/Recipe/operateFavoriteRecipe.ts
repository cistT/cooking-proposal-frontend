import { COOK_PROPOSAL_API_KEY } from './../../consts/app'
import Recipe from './Recipe'

import { COOK_PROPOSAL_API_URL } from 'consts/app'

export const registerFavoriteRecipe = async (
  userId: string,
  recipe: Recipe,
) => {
  const url = `${COOK_PROPOSAL_API_URL || 'http://localhost:8080'}/favorite`

  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'x-api-key': COOK_PROPOSAL_API_KEY,
    },
    body: JSON.stringify({
      userId,
      ...recipe,
      recipePublishday: new Date(recipe.recipePublishday),
    }),
  })
}

export const releaseFavoriteRecipe = async (
  userId: string,
  recipeId: number,
) => {
  const url = `${
    COOK_PROPOSAL_API_URL || 'http://localhost:8080'
  }/favorite/${userId}/${recipeId}`

  await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      'x-api-key': COOK_PROPOSAL_API_KEY,
    },
  })
}

export const fetchFavoriteRecipes = async (userId: string) => {
  const url = `${
    COOK_PROPOSAL_API_URL || 'http://localhost:8080'
  }/favorite/${userId}`

  const res = await fetch(url, {
    headers: {
      'x-api-key': COOK_PROPOSAL_API_KEY,
    },
  })
  const recipe = await res.json()
  return recipe
}
