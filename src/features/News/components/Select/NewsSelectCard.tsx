import { Card, Divider, Text, Title } from '@mantine/core'
import React, { FC } from 'react'

import styles from './NewsSelectCard.module.scss'

import NoneUnderlineLink from 'components/Link/NoneUnderlineLink'

type NewsSelectCardProps = Readonly<{
  id: string
  title: string
  date: Date
  category?: string
}>

const NewsSelectCard: FC<NewsSelectCardProps> = (props) => {
  const { id, title, date, category = '未分類' } = props

  return (
    <NoneUnderlineLink href={`news/${id}`}>
      <Card className={styles['card']} radius='md' withBorder>
        <div className={styles['upper']}>
          <Text>{category}</Text>
          <Text>{date.toLocaleString()}</Text>
        </div>
        <Divider my='sm' />
        <Title order={2} className={styles['title']}>
          {title}
        </Title>
      </Card>
    </NoneUnderlineLink>
  )
}

export default NewsSelectCard
