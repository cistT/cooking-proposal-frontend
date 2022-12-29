import React, { FC, ReactNode } from 'react'

import styles from './Layout.module.scss'

import Header, { HeaderProps } from 'components/Header/Header'

type LayoutProps = Readonly<{
  children: ReactNode
}> &
  HeaderProps

const Layout: FC<LayoutProps> = (props) => {
  const { children, uid, login, logout } = props
  return (
    <>
      <Header uid={uid} login={login} logout={logout} />
      <div className={styles['children']}>{children}</div>
    </>
  )
}

export default Layout
