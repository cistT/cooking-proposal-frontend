import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Loading from './Loading'

export default {
  title: 'Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>

export const Template: ComponentStory<typeof Loading> = () => <Loading />
