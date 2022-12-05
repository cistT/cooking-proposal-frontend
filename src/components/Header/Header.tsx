import {
  Header as MantineHeader,
  Container,
  Text,
  Group,
  Button,
} from '@mantine/core'
import React, { useState } from 'react'

import styles from './Header.module.scss'

const Header = () => {
  const [isLogined, setIsLogined] = useState<boolean>(false)
  const onClickLoginButton = () => setIsLogined(!isLogined)

  return (
    <MantineHeader height={45}>
      <Container className={styles['container']}>
        <Text
          variant='gradient'
          gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
          sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
          ta='center'
          fz='xl'
          fw={700}
        >
          レシピ提供アプリ(仮)
        </Text>
        <Group className={styles['group']}>
          <Button variant='white' className={styles['news-button']}>
            お知らせ
          </Button>
          {isLogined ? (
            <Button
              variant='white'
              onClick={onClickLoginButton}
              className={styles['login-button']}
            >
              ログイン
            </Button>
          ) : (
            <Button
              variant='white'
              onClick={onClickLoginButton}
              className={styles['login-button']}
            >
              ログアウト
            </Button>
          )}
          <Button variant='white' className={styles['setting-button']}>
            設定
          </Button>
        </Group>
      </Container>
    </MantineHeader>
  )
}

export default Header
