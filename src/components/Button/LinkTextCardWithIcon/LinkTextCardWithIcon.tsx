import { Card, Text } from '@mantine/core'
import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'

import styles from './LinkTextCardWithIcon.module.scss'

import NoneUnderlineLink from 'components/Link/NoneUnderlineLink'

type LinkTextCardWithIconProps = Readonly<{
  href: string
  icon: ReactNode
  text: string
  className?: string
}>

const LinkTextCardWithIcon: FC<LinkTextCardWithIconProps> = (props) => {
  const { href, icon, text, className = '' } = props

  return (
    <NoneUnderlineLink href={href}>
      <Card
        radius='md'
        withBorder
        className={classNames(styles['container'], className)}
      >
        <>
          <>{icon}</>
          <Text className={styles['text']}>{text}</Text>
        </>
      </Card>
    </NoneUnderlineLink>
  )
}

export default LinkTextCardWithIcon
