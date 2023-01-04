import { COOK_PROPOSAL_API_KEY, COOK_PROPOSAL_API_URL } from 'consts/app'

const fetchRecipe = async () => {
  const url = `${COOK_PROPOSAL_API_URL}/recipe/random`
  const res = await fetch(url, {
    headers: {
      'x-api-key': COOK_PROPOSAL_API_KEY,
    },
  })
  const recipe = await res.json()

  return recipe
}

export default fetchRecipe
