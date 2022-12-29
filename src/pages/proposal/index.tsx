import React, { useContext } from 'react'

import styles from './index.module.scss'

import BackButton from 'components/Button/BackButton/BackButton'
import Loading from 'components/Loading/Loading'
import { UIDContext } from 'features/Auth/UIDProvider'
import CookVerticalCard from 'features/Cook/VerticalCard/CookVerticalCard'
import {
  registerFavoriteRecipe,
  releaseFavoriteRecipe,
} from 'features/Cook/operateFavoriteCook'
import useRecipe from 'features/Cook/useRecipe'

const Recipe = () => {
  const { recipe, finishedFetch } = useRecipe()
  const uid = useContext(UIDContext)

  return (
    <>
      {finishedFetch ? (
        <div className={styles['container']}>
          {recipe && (
            <CookVerticalCard
              header={recipe.recipeTitle}
              image={recipe.smallImageUrl}
              imageAlt={recipe.recipeTitle}
              description={recipe.recipeDescription}
              indication={recipe.recipeIndication}
              cost={recipe.recipeCost}
              material={recipe.recipeMaterial}
              href={recipe.recipeUrl}
              login={uid ? true : false}
              registerFavoriteRecipe={() => {
                if (uid) {
                  registerFavoriteRecipe(uid, recipe)
                }
              }}
              releaseFavoriteRecipe={() => {
                if (uid) {
                  releaseFavoriteRecipe(uid, recipe.recipeId)
                }
              }}
            />
          )}
          <BackButton />
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Recipe
