import { Divider } from '@mantine/core'
import React, { FC } from 'react'

import FavoriteButton from '../FavoriteButton/FavoriteButton'
import ShowRecipeButton from '../ShowRecipeButton/ShowRecipeButton'

import VerticalCard from 'components/Card/VerticalCard/VerticalCard'
import CookOverview, {
  CookOverviewProps,
} from 'features/Cook/Overview/CookOverview'

type CookVerticalCardProps = Readonly<{
  header: string
  image: string
  imageAlt?: string
  href: string
  login?: boolean
  registerFavoriteRecipe?: () => void
  releaseFavoriteRecipe?: () => void
}> &
  CookOverviewProps

const CookVerticalCard: FC<CookVerticalCardProps> = (props) => {
  const {
    description,
    indication,
    cost,
    material,
    href,
    login = false,
    registerFavoriteRecipe = () => undefined,
    releaseFavoriteRecipe = () => undefined,
  } = props

  return (
    <VerticalCard
      {...props}
      explanation={
        <>
          <CookOverview
            description={description}
            indication={indication}
            cost={cost}
            material={material}
          />

          <Divider my='sm' />

          <ShowRecipeButton href={href} />

          {login && (
            <FavoriteButton
              register={registerFavoriteRecipe}
              release={releaseFavoriteRecipe}
            />
          )}
        </>
      }
    />
  )
}

export default CookVerticalCard
