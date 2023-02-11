import { Button, Divider, Title } from '@mantine/core'
import React, { FC } from 'react'

import styles from './Header.module.scss'

import NoneUnderlineLink from 'components/Link/NoneUnderlineLink'
import { APP_NAME } from 'consts/app'
import { UID } from 'features/Auth'

export type HeaderProps = Readonly<{
  uid: UID
  login: () => void
  logout: () => void
}>

const Header: FC<HeaderProps> = (props) => {
  const { uid, login, logout } = props
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
            {APP_NAME}
          </Title>
        </NoneUnderlineLink>

        {!uid && (
          <Button onClick={login} className={styles['button']} variant='subtle'>
            ログイン
          </Button>
        )}
        {uid && (
          <Button
            onClick={logout}
            className={styles['button']}
            variant='subtle'
          >
            ログアウト
          </Button>
        )}
      </header>
      <Divider my='sm' />
    </>
  )
}

export default Header
