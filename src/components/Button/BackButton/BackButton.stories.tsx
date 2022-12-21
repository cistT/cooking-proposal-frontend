import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import BackButton from './BackButton'

export default {
  title: 'Button/BackButton',
  component: BackButton,
} as ComponentMeta<typeof BackButton>

export const Template: ComponentStory<typeof BackButton> = () => <BackButton />
