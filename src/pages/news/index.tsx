import { Text } from '@mantine/core'
import React from 'react'

import styles from './index.module.scss'

import BackButton from 'components/Button/BackButton/BackButton'
import Loading from 'components/Loading/Loading'
import { useFetchNewsList } from 'features/News'
import NewsSelectCard from 'features/News/components/Select/NewsSelectCard'

const NewsSelect = () => {
  const { newsList, isLoading } = useFetchNewsList()

  return (
    <div className={styles['container']}>
      <Text className={styles['text']}>お知らせ</Text>

      {!isLoading ? (
        <>
          {newsList.length === 0 && (
            <Text className={styles['text']}>現在、お知らせはありません。</Text>
          )}
          {newsList.map((data) => (
            <NewsSelectCard
              key={data.id}
              id={data.id}
              title={data.title}
              category={data?.category?.name}
              date={new Date(data.publishedAt)}
            />
          ))}
          <BackButton />
        </>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default NewsSelect
