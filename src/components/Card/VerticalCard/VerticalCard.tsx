import { Card, Divider, Image, Title } from '@mantine/core'
import React, { FC } from 'react'

import CardProps from '../Card'

import styles from './VerticalCard.module.scss'

export type VerticalCardProps = CardProps &
  Readonly<{
    image: string
    imageAlt?: string
  }>

const VerticalCard: FC<VerticalCardProps> = (props) => {
  const { header, explanation, image, imageAlt = '' } = props

  return (
    <Card className={styles['container']} radius='md' withBorder>
      <Image src={image} alt={imageAlt} className={styles['image']} />
      <Divider my='sm' />
      <Title order={1} className={styles['header']}>
        {header}
      </Title>
      <div className={styles['explanation']}>{explanation}</div>
    </Card>
  )
}

export default VerticalCard
