import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import HorizonCard from './HorizonCard'

import testData from 'data/testData'

export default {
  title: 'Card/HorizonCard',
  component: HorizonCard,
} as ComponentMeta<typeof HorizonCard>

const Template: ComponentStory<typeof HorizonCard> = (args) => (
  <HorizonCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  image: testData[0].smallImageUrl,
  imageAlt: testData[0].recipeTitle,
  header: 'header',
  explanation: <>test</>,
}
