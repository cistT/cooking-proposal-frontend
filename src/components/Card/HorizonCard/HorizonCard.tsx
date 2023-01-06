import { Card, Group, Image, Title } from '@mantine/core'
import React, { FC, ReactNode } from 'react'

import CardProps from '../Card'

import styles from './HorizonCard.module.scss'

export type HorizonCardProps = CardProps &
  Readonly<{
    image?: string
    imageAlt?: string
    underContents?: ReactNode
  }>

const HorizonCard: FC<HorizonCardProps> = (props) => {
  const { header, explanation, image, imageAlt, underContents } = props

  return (
    <Card radius='md' withBorder>
      <Group className={styles['group']}>
        <Image src={image} alt={imageAlt} className={styles['image']} />
        <Title order={1} className={styles['header']}>
          {header}
        </Title>
        <div className={styles['explanation']}>{explanation}</div>
        <div className={styles['under-contents']}>{underContents}</div>
      </Group>
    </Card>
  )
}

export default HorizonCard
