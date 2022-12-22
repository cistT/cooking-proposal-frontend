import { GetServerSideProps } from 'next'
import React, { FC } from 'react'

import styles from './index.module.scss'

import BackButton from 'components/Button/BackButton/BackButton'
import CookVerticalCard from 'features/Cook/VerticalCard/CookVerticalCard'
import fetchRecipeList from 'features/Cook/fetchRecipeList'
import getRandomRecipeCategoryID from 'features/Cook/getRandomRecipeCategoryID'

type ProposalProps = {
  recipe: {
    foodImageUrl: string
    mediumImageUrl: string
    nickname: string
    pickup: number
    rank: string
    recipeCost: string
    recipeDescription: string
    recipeId: number
    recipeIndication: string
    recipeMaterial: string[]
    recipePublishday: string
    recipeTitle: string
    recipeUrl: string
    shop: number
    smallImageUrl: string
  }
}

const Index: FC<ProposalProps> = (props) => {
  const { recipe } = props

  return (
    <div className={styles['container']}>
      <CookVerticalCard
        header={recipe.recipeTitle}
        image={recipe.smallImageUrl}
        imageAlt={recipe.recipeTitle}
        description={recipe.recipeDescription}
        indication={recipe.recipeIndication}
        cost={recipe.recipeCost}
        material={recipe.recipeMaterial}
        href={recipe.recipeUrl}
      />
      <BackButton />
    </div>
  )
}

export default Index

export const getServerSideProps: GetServerSideProps = async () => {
  const categoryID = getRandomRecipeCategoryID()
  const recipeList = await fetchRecipeList(categoryID)

  const recipe =
    recipeList.result[Math.floor(Math.random() * recipeList.result.length)]

  return {
    props: {
      recipe,
    },
  }
}
