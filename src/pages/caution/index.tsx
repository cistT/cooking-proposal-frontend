import { Divider, Text } from '@mantine/core'
import React from 'react'

import styles from './index.module.scss'

import Article from 'components/Article/Article'
import BackButton from 'components/Button/BackButton/BackButton'

const Caution = () => {
  return (
    <div className={styles['container']}>
      <Article
        title='利用上の注意'
        article={
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
        }
      />
      <BackButton />
    </div>
  )
}

export default Caution
