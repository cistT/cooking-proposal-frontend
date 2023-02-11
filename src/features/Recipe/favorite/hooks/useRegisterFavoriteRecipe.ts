import { trpc } from 'utiles/trpc'

export const useRegisterFavoriteRecipe = () => {
  const registerFavoriteRecipe = trpc.registerFavoriteRecipe.useMutation()

  return {
    registerFavoriteRecipe,
  }
}
