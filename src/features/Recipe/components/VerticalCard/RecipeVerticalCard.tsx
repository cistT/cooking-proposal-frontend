import { Divider } from '@mantine/core'
import React, { FC } from 'react'

import FavoriteButton from '../FavoriteButton/FavoriteButton'
import ShowRecipeButton from '../ShowRecipeButton/ShowRecipeButton'

import VerticalCard from 'components/Card/VerticalCard/VerticalCard'
import { Recipe } from 'features/Recipe'
import RecipeOverview from 'features/Recipe/components/Overview/RecipeOverview'

type RecipeVerticalCardProps = Readonly<
  {
    header: string
    imageAlt: string
    login?: boolean
    initialFavorite?: boolean
    registerFavoriteRecipe?: () => void
    releaseFavoriteRecipe?: () => void
  } & Recipe
>

const RecipeVerticalCard: FC<RecipeVerticalCardProps> = (props) => {
  const {
    description,
    indication,
    cost,
    material,
    url,
    login = false,
    initialFavorite = false,
    registerFavoriteRecipe = () => undefined,
    releaseFavoriteRecipe = () => undefined,
  } = props

  return (
    <VerticalCard
      {...props}
      explanation={
        <>
          <RecipeOverview
            description={description}
            indication={indication}
            cost={cost}
            material={material}
          />

          <Divider my='sm' />

          <ShowRecipeButton href={url} />

          {login && (
            <FavoriteButton
              initialFavorite={initialFavorite}
              register={registerFavoriteRecipe}
              release={releaseFavoriteRecipe}
            />
          )}
        </>
      }
    />
  )
}

export default RecipeVerticalCard
