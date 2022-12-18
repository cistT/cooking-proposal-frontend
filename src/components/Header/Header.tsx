import { Divider, Title } from '@mantine/core'
import React from 'react'

import styles from './Header.module.scss'

import NoneUnderlineLink from 'components/Link/NoneUnderlineLink'

const Header = () => {
  return (
    <>
      <header className={styles['contaier']}>
        <NoneUnderlineLink href='/' className={styles['name-link']}>
          <Title
            order={1}
            variant='gradient'
            gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
            className={styles['name']}
          >
            料理提案アプリ(仮)
          </Title>
        </NoneUnderlineLink>
      </header>
      <Divider my='sm' />
    </>
  )
}

export default Header
