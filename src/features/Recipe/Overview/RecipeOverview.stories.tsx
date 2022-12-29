import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import RecipeOverview from './RecipeOverview'

import testData from 'data/testData'

export default {
  title: 'feature/Recipe/RecipeOverview',
  component: RecipeOverview,
} as ComponentMeta<typeof RecipeOverview>

const Template: ComponentStory<typeof RecipeOverview> = (args) => (
  <RecipeOverview {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  description: testData[0].recipeDescription,
  indication: testData[0].recipeIndication,
  cost: testData[0].recipeCost,
  material: testData[0].recipeMaterial,
}
