import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import NewsSelectCard from './NewsSelectCard'

export default {
  title: 'News/NewsSelectCard',
  component: NewsSelectCard,
} as ComponentMeta<typeof NewsSelectCard>

const Template: ComponentStory<typeof NewsSelectCard> = (args) => (
  <NewsSelectCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'タイトル',
  date: new Date(2022, 5 - 1, 5, 6, 35, 20, 333),
  category: '重要',
}
