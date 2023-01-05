import { Contents } from './News'

const fetchNews = async (): Promise<Contents[]> => {
  const res = await fetch('/api/news')
  const news: Promise<Contents[]> = res.json()

  return news
}

export default fetchNews
