import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IconSearch } from '@tabler/icons'
import React from 'react'

import LinkTextCardWithIcon from './LinkTextCardWithIcon'

export default {
  title: 'Button/LinkTextCardWithIcon',
  component: LinkTextCardWithIcon,
} as ComponentMeta<typeof LinkTextCardWithIcon>

const Template: ComponentStory<typeof LinkTextCardWithIcon> = (args) => (
  <LinkTextCardWithIcon {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  href: '/',
  text: '保存した料理を見る',
  icon: <IconSearch />,
}
