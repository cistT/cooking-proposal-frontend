import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import NewsArticle from './NewsArticle'

export default {
  title: 'News/NewsArticle',
  component: NewsArticle,
} as ComponentMeta<typeof NewsArticle>

const Template: ComponentStory<typeof NewsArticle> = (args) => (
  <NewsArticle {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'テスト',
  date: new Date(2022, 5 - 1, 5, 6, 35, 20, 333),
  category: '重要',
  article: 'test\ntest2\nHello,World\nこんにちは、世界',
}
