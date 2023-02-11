import React from 'react'

import styles from './[id].module.scss'

import BackButton from 'components/Button/BackButton/BackButton'
import Loading from 'components/Loading/Loading'
import { useFetchIdentificationNews } from 'features/News'
import NewsArticle from 'features/News/components/Article/NewsArticle'
import useGetParam from 'hooks/useGetParam'

const News = () => {
  const { param } = useGetParam()

  const { news, isLoading } = useFetchIdentificationNews(param)

  if (isLoading) {
    return <Loading />
  }

  if (news === null) {
    return (
      <div className={styles['container']}>
        <p>記事が取得できませんでした。</p>
        <BackButton />
      </div>
    )
  }

  return (
    <div className={styles['container']}>
      <NewsArticle
        title={news.title}
        date={new Date(news.publishedAt)}
        category={news?.category?.name}
        article={news.content}
      />

      <BackButton />
    </div>
  )
}

export default News
