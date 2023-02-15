import { IconSearch } from '@tabler/icons'
import { IconNews } from '@tabler/icons'
import { IconAlertCircle } from '@tabler/icons'
import { IconHeart } from '@tabler/icons'
import { useContext } from 'react'

import styles from './index.module.scss'

import LinkTextCardWithIcon from 'components/Button/LinkTextCardWithIcon/LinkTextCardWithIcon'
import path from 'consts/path'
import { UIDContext } from 'features/Auth'
import {
  useFetchRandomRecipe,
  useRegisterFavoriteRecipe,
  useReleaseFavoriteRecipe,
} from 'features/Recipe'
import SimpleVerticalCard from 'features/Recipe/components/SimpleVerticalCard/SimpleVerticalCard'
import Loading from 'components/Loading/Loading'

const Home = () => {
  const uid = useContext(UIDContext)

  const { recipe, isLoading } = useFetchRandomRecipe()
  const { registerFavoriteRecipe } = useRegisterFavoriteRecipe()
  const { releaseFavoriteRecipe } = useReleaseFavoriteRecipe()

  if (isLoading) {
    return <Loading />
  }

  if (!recipe) {
    return <p>データが取得できませんでした。</p>
  }

  return (
    <div className={styles['container']}>
      <SimpleVerticalCard
        title={recipe.title}
        imageURL={recipe.image}
        imageAlt={recipe.title}
        recipeURL={recipe.url}
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
      <LinkTextCardWithIcon
        text='料理を見る'
        href={path.PROPOSAL_RECIPE_PATH}
        icon={<IconSearch className={styles['icon']} />}
      />
      {uid && (
        <LinkTextCardWithIcon
          text='お気に入り'
          href={path.FAVORITE_RECIPES_PATH}
          icon={<IconHeart className={styles['icon']} />}
        />
      )}
      <LinkTextCardWithIcon
        text='お知らせ'
        href={path.SELECTION_NEWS_PATH}
        icon={<IconNews className={styles['icon']} />}
      />
      <LinkTextCardWithIcon
        text='利用上の注意'
        href={path.CAUTION_PATH}
        icon={<IconAlertCircle className={styles['icon']} />}
      />
    </div>
  )
}

export default Home
