import { Text } from '@mantine/core'
import React, { FC, useContext, useEffect } from 'react'

import styles from './index.module.scss'

import BackButton from 'components/Button/BackButton/BackButton'
import { FetchedNews } from 'features/News/News'
import NewsSelectCard from 'features/News/Select/NewsSelectCard'
import fetchNews from 'features/News/fetchNews'
import { NewsContext } from 'pages/_app'

type NewsSelectProps = FetchedNews

const NewsSelect: FC<NewsSelectProps> = (props) => {
  const { contents } = props
  const temporarilySavedNewsContents = useContext(NewsContext)
  useEffect(() => {
    temporarilySavedNewsContents(contents)
  }, [contents, temporarilySavedNewsContents])

  return (
    <div className={styles['container']}>
      <Text className={styles['text']}>お知らせ</Text>
      <>
        {contents.length === 0 && (
          <Text className={styles['text']}>現在、お知らせはありません。</Text>
        )}
        {contents.map((data) => (
          <NewsSelectCard
            key={data.id}
            id={data.id}
            title={data.title}
            category={data?.category?.name}
            date={new Date(data.publishedAt)}
          />
        ))}
      </>
      <BackButton />
    </div>
  )
}

export default NewsSelect

export const getServerSideProps = async () => {
  const news = await fetchNews()
  const contents = news.contents

  return {
    props: {
      contents,
    },
  }
}
