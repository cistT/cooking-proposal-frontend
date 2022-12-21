import { FetchedNews } from './News'

import { client } from 'features/News/client'

const fetchNews = async (contentID?: string): Promise<FetchedNews> => {
  const news: FetchedNews = await client.get({
    endpoint: 'news',
    contentId: contentID,
  })

  return news
}

export default fetchNews
