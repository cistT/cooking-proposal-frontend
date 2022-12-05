import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Header from './Header'

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>

export const Template: ComponentStory<typeof Header> = () => <Header />
