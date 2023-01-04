const fetchRecipe = async () => {
  const url = '/api/recipe/random'
  const res = await fetch(url)
  const recipe = await res.json()

  return recipe
}

export default fetchRecipe
