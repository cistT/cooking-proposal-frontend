import React, { useContext } from 'react'

import styles from './index.module.scss'

import BackButton from 'components/Button/BackButton/BackButton'
import Loading from 'components/Loading/Loading'
import { UIDContext } from 'features/Auth/UIDProvider'
import RecipeVerticalCard from 'features/Recipe/VerticalCard/RecipeVerticalCard'
import {
  registerFavoriteRecipe,
  releaseFavoriteRecipe,
} from 'features/Recipe/operateFavoriteRecipe'
import useRecipe from 'features/Recipe/useRecipe'

const Recipe = () => {
  const { recipe, finishedFetch } = useRecipe()
  const uid = useContext(UIDContext)

  return (
    <>
      {finishedFetch ? (
        <div className={styles['container']}>
          {recipe && (
            <RecipeVerticalCard
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
