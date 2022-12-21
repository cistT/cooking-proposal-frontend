import { Divider, Text } from '@mantine/core'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import Article from './Article'

export default {
  title: 'Article',
  component: Article,
} as ComponentMeta<typeof Article>

const Template: ComponentStory<typeof Article> = (args) => <Article {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: '利用上の注意',
  article: (
    <>
      <Text>
        本アプリケーションは、試作品の段階です。使いにくいところやバグ等がある可能性がありますが、ご了承ください。
      </Text>
      <Divider my='sm' />
      <Text>クレジット</Text>
      <a
        href='https://developers.rakuten.com/'
        target='_blank'
        rel='noreferrer'
      >
        Supported by Rakuten Developers
      </a>
      {/* <!-- Rakuten Web Services Attribution Snippet TO HERE --> */}
    </>
  ),
}
