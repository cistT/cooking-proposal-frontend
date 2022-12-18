import React, { FC, ReactNode } from 'react'

import styles from './Layout.module.scss'

import Header from 'components/Header/Header'

type LayoutProps = Readonly<{
  children: ReactNode
}>

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props
  return (
    <>
      <Header />
      <div className={styles['children']}>{children}</div>
    </>
  )
}

export default Layout
