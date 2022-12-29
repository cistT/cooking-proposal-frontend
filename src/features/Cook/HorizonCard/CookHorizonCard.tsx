import React, { FC } from 'react'

import FavoriteButton from '../FavoriteButton/FavoriteButton'
import ShowRecipeButton from '../ShowRecipeButton/ShowRecipeButton'

import styles from './CookHorizonCard.module.scss'

import HorizonCard from 'components/Card/HorizonCard/HorizonCard'
import CookOverview, {
  CookOverviewProps,
} from 'features/Cook/Overview/CookOverview'

type CookHorizonCardProps = Readonly<{
  header: string
  href: string
  image?: string
  imageAlt?: string
  login?: boolean
  registerFavoriteRecipe: () => void
  releaseFavoriteRecipe: () => void
}> &
  CookOverviewProps

const CookHorizonCard: FC<CookHorizonCardProps> = (props) => {
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
          <CookOverview
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

export default CookHorizonCard
