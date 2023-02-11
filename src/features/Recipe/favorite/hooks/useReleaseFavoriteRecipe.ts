import { trpc } from 'utiles/trpc'

export const useReleaseFavoriteRecipe = () => {
  const releaseFavoriteRecipe = trpc.releaseFavoriteRecipe.useMutation()
  return { releaseFavoriteRecipe }
}
