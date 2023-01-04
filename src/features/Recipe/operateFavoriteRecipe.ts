import Recipe from './Recipe'

export const registerFavoriteRecipe = async (
  userId: string,
  recipe: Recipe,
) => {
  const url = '/api/favorite'

  await fetch(url, {
    method: 'POST',
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
  const url = `/api/favorite/${userId}/${recipeId}`
  await fetch(url, {
    method: 'DELETE',
  })
}

export const fetchFavoriteRecipes = async (userId: string) => {
  const url = `api/favorite/${userId}`
  const res = await fetch(url)
  const recipe = await res.json()
  return recipe
}
