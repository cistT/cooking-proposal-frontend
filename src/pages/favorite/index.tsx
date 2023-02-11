import { Text } from '@mantine/core'
import React, { useContext } from 'react'

import styles from './index.module.scss'

import BackButton from 'components/Button/BackButton/BackButton'
import Loading from 'components/Loading/Loading'
import { UIDContext } from 'features/Auth/components/UIDProvider'
import {
  useRegisterFavoriteRecipe,
  useReleaseFavoriteRecipe,
} from 'features/Recipe'
import RecipeHorizonCard from 'features/Recipe/components/HorizonCard/RecipeHorizonCard'
import RecipeVerticalCard from 'features/Recipe/components/VerticalCard/RecipeVerticalCard'
import { useFetchFavoriteRecipeList } from 'features/Recipe/favorite/hooks/useFetchFavoriteRecipeList'
import useIsSP from 'hooks/useIsSP'

const Index = () => {
  const uid = useContext(UIDContext) as string

  const { isSP } = useIsSP()

  const { favoriteRecipeList, isLoading } = useFetchFavoriteRecipeList(uid)

  const { registerFavoriteRecipe } = useRegisterFavoriteRecipe()
  const { releaseFavoriteRecipe } = useReleaseFavoriteRecipe()

  if (isLoading) {
    return <Loading />
  }

  if (isSP) {
    return (
      <div className={styles['container']}>
        <Text className={styles['text']}>お気に入りレシピ</Text>

        {favoriteRecipeList.length === 0 && (
          <Text className={styles['text']}>
            お気に入りレシピは登録されていません
          </Text>
        )}

        <>
          {favoriteRecipeList.map((recipe) => (
            <RecipeVerticalCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              header={recipe.title}
              image={recipe.image}
              imageAlt={recipe.title}
              description={recipe.description}
              indication={recipe.indication}
              cost={recipe.cost}
              material={recipe.material}
              url={recipe.url}
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
              login
              initialFavorite
            />
          ))}
        </>

        <BackButton />
      </div>
    )
  }

  return (
    <div className={styles['container']}>
      <Text className={styles['text']}>お気に入りレシピ</Text>

      {favoriteRecipeList.length === 0 && (
        <Text className={styles['text']}>
          お気に入りレシピは登録されていません
        </Text>
      )}

      <>
        {favoriteRecipeList.map((recipe) => (
          <RecipeHorizonCard
            key={recipe.id}
            header={recipe.title}
            image={recipe.image}
            imageAlt={recipe.title}
            description={recipe.description}
            indication={recipe.indication}
            cost={recipe.cost}
            material={recipe.material}
            href={recipe.url}
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
        ))}
      </>

      <BackButton />
    </div>
  )
}

export default Index
