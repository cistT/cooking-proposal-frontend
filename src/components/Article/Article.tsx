import { Card, Divider, Title } from '@mantine/core'
import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'

import styles from './Article.module.scss'

type ArticleProps = Readonly<{
  title: string
  article: ReactNode
  className?: string
}>

const Article: FC<ArticleProps> = (props) => {
  const { title, article, className = '' } = props

  return (
    <Card
      radius='md'
      withBorder
      className={classNames(styles['container'], className)}
    >
      <Title order={1} className={styles['title']}>
        {title}
      </Title>
      <Divider my='sm' />
      <div className={styles['article']}>{article}</div>
    </Card>
  )
}

export default Article
