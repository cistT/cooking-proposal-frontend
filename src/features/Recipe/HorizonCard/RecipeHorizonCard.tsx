import React, { FC } from 'react'

import FavoriteButton from '../FavoriteButton/FavoriteButton'
import ShowRecipeButton from '../ShowRecipeButton/ShowRecipeButton'

import styles from './RecipeHorizonCard.module.scss'

import HorizonCard from 'components/Card/HorizonCard/HorizonCard'
import RecipeOverview, {
  RecipeOverviewProps,
} from 'features/Recipe/Overview/RecipeOverview'

type RecipeHorizonCardProps = Readonly<{
  header: string
  href: string
  image?: string
  imageAlt?: string
  login?: boolean
  registerFavoriteRecipe: () => void
  releaseFavoriteRecipe: () => void
}> &
  RecipeOverviewProps

const RecipeHorizonCard: FC<RecipeHorizonCardProps> = (props) => {
  const {
    description,
    indication,
    cost,
    material,
    login = true,
    href,
    registerFavoriteRecipe = () => undefined,
    releaseFavoriteRecipe = () => undefined,
  } = props

  return (
    <HorizonCard
      {...props}
      explanation={
        <>
          <RecipeOverview
            description={description}
            indication={indication}
            cost={cost}
            material={material}
          />

          <div className={styles['group']}>
            <ShowRecipeButton href={href} />
            {login && (
              <FavoriteButton
                register={registerFavoriteRecipe}
                release={releaseFavoriteRecipe}
                initialFavorite
              />
            )}
          </div>
        </>
      }
    />
  )
}

export default RecipeHorizonCard
