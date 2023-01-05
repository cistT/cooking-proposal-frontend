import { useEffect, useState } from 'react'

import { Contents } from './News'
import fetchNews from './fetchNews'

const useFetchNews = () => {
  const [news, setNews] = useState<Contents[]>([])
  const [finishedFetch, setFinishedFetch] = useState(false)
  let ignore = false
  useEffect(() => {
    if (ignore) {
      return
    }
    ;(async () => {
      const news = await fetchNews()

      if (news) {
        setNews(news)
      }

      setFinishedFetch(true)
    })()

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ignore = true
    }
  }, [])

  return { news, finishedFetch }
}

export default useFetchNews
