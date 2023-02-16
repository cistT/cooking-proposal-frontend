import React, { useContext } from 'react'

import styles from './index.module.scss'

import BackButton from 'components/Button/BackButton/BackButton'
import Loading from 'components/Loading/Loading'
import { UIDContext } from 'features/Auth/components/UIDProvider'
import {
  useFetchRandomRecipe,
  useRegisterFavoriteRecipe,
  useReleaseFavoriteRecipe,
} from 'features/Recipe'
import RecipeVerticalCard from 'features/Recipe/components/VerticalCard/RecipeVerticalCard'
import ReloadButton from 'components/Button/ReloadButton/ReloadButton'

const Recipe = () => {
  const uid = useContext(UIDContext)

  const { recipe, isLoading, refetchRecipe } = useFetchRandomRecipe()
  const { registerFavoriteRecipe } = useRegisterFavoriteRecipe()
  const { releaseFavoriteRecipe } = useReleaseFavoriteRecipe()

  if (isLoading) {
    return <Loading />
  }

  if (!recipe) {
    return (
      <>
        <p>データが取得できませんでした。</p>
        <BackButton />
      </>
    )
  }

  return (
    <div className={styles['container']}>
      <ReloadButton
        onClick={refetchRecipe}
        className={styles['reload-button']}
      />
      <RecipeVerticalCard
        {...recipe}
        header={recipe.title}
        imageAlt={recipe.title}
        login={uid ? true : false}
        registerFavoriteRecipe={() => {
          if (uid) {
            registerFavoriteRecipe.mutate({
              userID: uid,
              recipe: {
                id: recipe.id,
                title: recipe.title,
                url: recipe.url,
                image: recipe.image,
                cost: recipe.cost,
                description: recipe.description,
                indication: recipe.indication,
                material: recipe.material,
              },
            })
          }
        }}
        releaseFavoriteRecipe={() => {
          if (uid) {
            releaseFavoriteRecipe.mutate({
              userID: uid,
              recipeID: recipe.id,
            })
          }
        }}
      />

      <BackButton />
    </div>
  )
}

export default Recipe
