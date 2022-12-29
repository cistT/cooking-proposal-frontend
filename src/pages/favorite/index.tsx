import { Text } from '@mantine/core'
import React, { useContext } from 'react'

import styles from './index.module.scss'

import BackButton from 'components/Button/BackButton/BackButton'
import Loading from 'components/Loading/Loading'
import { UIDContext } from 'features/Auth/UIDProvider'
import RecipeHorizonCard from 'features/Recipe/HorizonCard/RecipeHorizonCard'
import {
  registerFavoriteRecipe,
  releaseFavoriteRecipe,
} from 'features/Recipe/operateFavoriteRecipe'
import useFavoriteRecipes from 'features/Recipe/useFavoriteRecipes'

const Index = () => {
  const uid = useContext(UIDContext)

  const { finishedFetch, favoriteRecipes } = useFavoriteRecipes(uid)

  return (
    <>
      {finishedFetch ? (
        <div className={styles['container']}>
          <Text className={styles['text']}>お気に入りレシピ</Text>

          {favoriteRecipes.length === 0 && (
            <Text className={styles['text']}>
              お気に入りレシピは登録されていません
            </Text>
          )}

          <>
            {favoriteRecipes.map((recipe) => (
              <RecipeHorizonCard
                key={recipe.recipeId}
                header={recipe.recipeTitle}
                image={recipe.smallImageUrl}
                imageAlt={recipe.recipeTitle}
                description={recipe.recipeDescription}
                indication={recipe.recipeIndication}
                cost={recipe.recipeCost}
                material={recipe.recipeMaterial}
                href={recipe.recipeUrl}
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
            ))}
          </>

          <BackButton />
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Index
