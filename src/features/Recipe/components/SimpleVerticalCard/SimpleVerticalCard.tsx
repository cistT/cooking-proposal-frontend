import VerticalCard from 'components/Card/VerticalCard/VerticalCard'
import React, { FC } from 'react'
import ShowRecipeButton from '../ShowRecipeButton/ShowRecipeButton'
import FavoriteButton from '../FavoriteButton/FavoriteButton'

type SimpleVerticalProps = {
  title: string
  imageURL: string
  imageAlt: string
  recipeURL: string
  login?: boolean
  initialFavorite?: boolean
  registerFavoriteRecipe?: () => void
  releaseFavoriteRecipe?: () => void
}

const SimpleVerticalCard: FC<SimpleVerticalProps> = (props) => {
  const {
    title,
    imageURL,
    imageAlt,
    recipeURL,
    login,
    initialFavorite,
    registerFavoriteRecipe = () => undefined,
    releaseFavoriteRecipe = () => undefined,
  } = props

  return (
    <VerticalCard
      header={title}
      image={imageURL}
      imageAlt={imageAlt}
      explanation={
        <>
          <ShowRecipeButton href={recipeURL} />

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

export default SimpleVerticalCard
