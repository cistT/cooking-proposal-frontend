const fetchRecipeList = async (categoryId: string) => {
  const res = await fetch(
    `https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=${process.env.NEXT_PUBLIC_APPLICATION_ID}&categoryId=${categoryId}`,
  )
  const recipeList = res.json()

  return recipeList
}

export default fetchRecipeList
