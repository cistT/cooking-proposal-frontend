import { Text } from '@mantine/core'
import React, { useContext, useEffect } from 'react'

import styles from './index.module.scss'

import BackButton from 'components/Button/BackButton/BackButton'
import Loading from 'components/Loading/Loading'
import NewsSelectCard from 'features/News/Select/NewsSelectCard'
import useFetchNews from 'features/News/useFetchNews'
import { NewsContext } from 'pages/_app'

const NewsSelect = () => {
  const { news, finishedFetch } = useFetchNews()

  const temporarilySavedNewsnews = useContext(NewsContext)
  useEffect(() => {
    temporarilySavedNewsnews(news)
  }, [news, temporarilySavedNewsnews])

  return (
    <div className={styles['container']}>
      <Text className={styles['text']}>お知らせ</Text>

      {finishedFetch ? (
        <>
          {news.length === 0 && (
            <Text className={styles['text']}>現在、お知らせはありません。</Text>
          )}
          {news.map((data) => (
            <NewsSelectCard
              key={data.id}
              id={data.id}
              title={data.title}
              category={data?.category?.name}
              date={new Date(data.publishedAt)}
            />
          ))}
        </>
      ) : (
        <Loading />
      )}

      <BackButton />
    </div>
  )
}

export default NewsSelect
