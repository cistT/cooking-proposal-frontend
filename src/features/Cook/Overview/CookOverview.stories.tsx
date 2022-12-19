import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import CookOverview from './CookOverview'

import testData from 'data/testData'

export default {
  title: 'feature/Cook/CookOverview',
  component: CookOverview,
} as ComponentMeta<typeof CookOverview>

const Template: ComponentStory<typeof CookOverview> = (args) => (
  <CookOverview {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  description: testData[0].recipeDescription,
  indication: testData[0].recipeIndication,
  cost: testData[0].recipeCost,
  material: testData[0].recipeMaterial,
}
