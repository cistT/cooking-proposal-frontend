import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import SimpleVerticalCard from './SimpleVerticalCard'

import testData from 'data/testData'

export default {
  title: 'Card/SimpleVerticalCard',
  component: SimpleVerticalCard,
} as ComponentMeta<typeof SimpleVerticalCard>

const Template: ComponentStory<typeof SimpleVerticalCard> = (args) => (
  <SimpleVerticalCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: testData[0].recipeTitle,
  imageURL: testData[0].foodImageUrl,
  imageAlt: testData[0].recipeTitle,
  recipeURL: testData[0].recipeUrl,
  login: true,
}
