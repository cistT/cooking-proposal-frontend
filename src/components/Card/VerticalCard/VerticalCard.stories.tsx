import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import VerticalCard from './VerticalCard'

import testData from 'data/testData'

export default {
  title: 'Card/VerticalCard',
  component: VerticalCard,
} as ComponentMeta<typeof VerticalCard>

const Template: ComponentStory<typeof VerticalCard> = (args) => (
  <VerticalCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  image: testData[0].smallImageUrl,
  imageAlt: testData[0].recipeTitle,
  header: 'header',
  explanation: <>test</>,
}
