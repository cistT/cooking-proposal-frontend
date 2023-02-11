import { router } from '../trpc'

import { routers } from './routers'

export const appRouter = router({
  fetchRandomRecipe: routers.proposalRecipe.fetchRandomRecipe,
  fetchNewsList: routers.news.fetchList,
  fetchFavoriteRecipeList: routers.favorite.fetchList,
  releaseFavoriteRecipe: routers.favorite.release,
  registerFavoriteRecipe: routers.favorite.register,
})

export type AppRouter = typeof appRouter
