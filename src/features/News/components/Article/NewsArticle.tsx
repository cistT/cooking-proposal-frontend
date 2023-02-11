import { Card, Divider, Text, Title } from '@mantine/core'
import React, { FC } from 'react'

import styles from './NewsArticle.module.scss'
type NewsArticleProps = Readonly<{
  title: string
  date: Date
  category?: string
  article: string
}>

const NewsArticle: FC<NewsArticleProps> = (props) => {
  const { title, date, category = '未分類', article } = props

  return (
    <Card radius='md' withBorder className={styles['container']}>
      <div className={styles['upper']}>
        <Text className={styles['category']}>{category}</Text>
        <Text className={styles['date']}>{date.toLocaleString()}</Text>
      </div>
      <Title order={1} className={styles['title']}>
        {title}
      </Title>
      <Divider my='sm' />

      <Text className={styles['article']}>{article}</Text>
    </Card>
  )
}

export default NewsArticle
