import { Divider } from '@mantine/core'
import React, { FC } from 'react'

import FavoriteButton from '../FavoriteButton/FavoriteButton'
import ShowRecipeButton from '../ShowRecipeButton/ShowRecipeButton'

import VerticalCard from 'components/Card/VerticalCard/VerticalCard'
import RecipeOverview, {
  RecipeOverviewProps,
} from 'features/Recipe/Overview/RecipeOverview'

type RecipeVerticalCardProps = Readonly<{
  header: string
  image: string
  imageAlt?: string
  href: string
  login?: boolean
  initialFavorite?: boolean
  registerFavoriteRecipe?: () => void
  releaseFavoriteRecipe?: () => void
}> &
  RecipeOverviewProps

const RecipeVerticalCard: FC<RecipeVerticalCardProps> = (props) => {
  const {
    description,
    indication,
    cost,
    material,
    href,
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

          <ShowRecipeButton href={href} />

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
