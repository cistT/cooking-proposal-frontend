import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import RecipeVerticalCard from './RecipeVerticalCard'

import testData from 'data/testData'

export default {
  title: 'Card/RecipeVerticalCard',
  component: RecipeVerticalCard,
} as ComponentMeta<typeof RecipeVerticalCard>

const Template: ComponentStory<typeof RecipeVerticalCard> = (args) => (
  <RecipeVerticalCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  header: testData[0].recipeTitle,
  image: testData[0].smallImageUrl,
  imageAlt: testData[0].recipeTitle,
  description: testData[0].recipeDescription,
  indication: testData[0].recipeIndication,
  cost: testData[0].recipeCost,
  material: testData[0].recipeMaterial,
  href: testData[0].recipeUrl,
}
