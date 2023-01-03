import Recipe from './Recipe'

export const registerFavoriteRecipe = async (
  userId: string,
  recipe: Recipe,
) => {
  const url = `${
    process.env.NEXT_PUBLIC_DATABASE_URL || 'http://localhost:8080'
  }/favorite`

  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
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
    process.env.NEXT_PUBLIC_DATABASE_URL || 'http://localhost:8080'
  }/favorite/${userId}/${recipeId}`

  await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
}

export const fetchFavoriteRecipes = async (userId: string) => {
  const url = `${
    process.env.NEXT_PUBLIC_DATABASE_URL || 'http://localhost:8080'
  }/favorite/${userId}`

  const res = await fetch(url)
  const recipe = await res.json()
  return recipe
}
