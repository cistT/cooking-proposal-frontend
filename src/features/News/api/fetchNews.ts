import { MicroCMSQueries } from 'microcms-js-sdk'

import { Contents } from '..'

import { microCMS } from 'conf'
import { client } from 'conf/microCMSClient'

type FetchNews = (queries?: MicroCMSQueries) => Promise<Contents[]>
type ResponseFetchedNews = { contents: Contents[] }

export const fetchNews: FetchNews = async (queries) => {
  const news: ResponseFetchedNews = await client.get({
    endpoint: microCMS.ENDPOINT.NEWS,
    queries: queries,
  })
  const { contents = [] } = news

  return contents
}
