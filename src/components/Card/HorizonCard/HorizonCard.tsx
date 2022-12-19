import { Card, Group, Image, Title } from '@mantine/core'
import React, { FC } from 'react'

import CardProps from '../Card'

import styles from './HorizonCard.module.scss'

import NoneUnderlineLink from 'components/Link/NoneUnderlineLink'

export type HorizonCardProps = CardProps &
  Readonly<{
    href?: string
    image?: string
    imageAlt?: string
  }>

const HorizonCard: FC<HorizonCardProps> = (props) => {
  const { header, explanation, href = '', image, imageAlt } = props

  return (
    <NoneUnderlineLink href={href}>
      <Card radius='md' withBorder>
        <Group className={styles['group']}>
          <Image src={image} alt={imageAlt} className={styles['image']} />
          <Title order={1} className={styles['header']}>
            {header}
          </Title>
          <div className={styles['explanation']}>{explanation}</div>
        </Group>
      </Card>
    </NoneUnderlineLink>
  )
}

export default HorizonCard
