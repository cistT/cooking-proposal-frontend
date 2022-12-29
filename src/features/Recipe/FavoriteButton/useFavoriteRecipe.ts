import { useState } from 'react'

const useFavoriteRecipe = (initial: boolean) => {
  const [isFavorite, setIsFavorite] = useState(initial)
  const addFavorite = () => setIsFavorite(true)
  const cancellationFavorite = () => setIsFavorite(false)

  return { isFavorite, addFavorite, cancellationFavorite }
}

export default useFavoriteRecipe
