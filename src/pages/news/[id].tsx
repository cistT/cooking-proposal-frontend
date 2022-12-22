import { useRouter } from 'next/router'
import React, { useContext } from 'react'

import styles from './[id].module.scss'

import BackButton from 'components/Button/BackButton/BackButton'
import NewsArticle from 'features/News/Article/NewsArticle'
import { NewsContentsContext } from 'pages/_app'

const News = () => {
  const newsContents = useContext(NewsContentsContext)

  const router = useRouter()
  const query = router.query
  const params: string = query.id as string

  const previewNews = newsContents?.filter(({ id }) => id === params)[0] ?? null

  return (
    <div className={styles['container']}>
      {previewNews && (
        <NewsArticle
          title={previewNews.title}
          date={new Date(previewNews.publishedAt)}
          category={previewNews?.category?.name}
          article={previewNews.content}
        />
      )}
      <BackButton />
    </div>
  )
}

export default News
