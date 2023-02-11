import { z } from 'zod'

import { fetchNews } from 'features/News'
import { Recipe, fetchRecipe } from 'features/Recipe'
import { procedure } from 'server/trpc'

export const routers = {
  news: {
    fetchList: procedure
      .input(
        z
          .object({
            id: z.string(),
          })
          .optional(),
      )
      .query(async ({ input }) => {
        const newsList = await fetchNews({ ids: input?.id })
        return {
          newsList,
        }
      }),
  },
  proposalRecipe: {
    fetchRandomRecipe: procedure.query(async () => {
      const recipe = await fetchRecipe()
      return {
        recipe,
      }
    }),
  },
  favorite: {
    fetchList: procedure
      .input(
        z.object({
          userID: z.string(),
        }),
      )
      .query(async ({ ctx, input }) => {
        const favoriteCook = await ctx.prisma.favoriteCook.findMany({
          where: { userID: input.userID },
        })
        return {
          favoriteRecipeList: favoriteCook.map((cook) => ({
            ...cook,
            id: cook.recipeID,
          })),
        }
      }),
    register: procedure
      .input(
        z.object({
          userID: z.string(),
          recipe: Recipe,
        }),
      )
      .mutation(async ({ ctx, input }) => {
        const { id, ...recipe } = input.recipe
        await ctx.prisma.favoriteCook.create({
          data: {
            ...recipe,
            recipeID: id,
            userID: input.userID,
            updateAt: new Date(),
          },
        })
      }),
    release: procedure
      .input(
        z.object({
          userID: z.string(),
          recipeID: z.number(),
        }),
      )
      .mutation(async ({ ctx, input }) => {
        await ctx.prisma.favoriteCook.deleteMany({
          where: { userID: input.userID, recipeID: input.recipeID },
        })
      }),
  },
}
