type Category = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
}

export type Contents = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  category?: Category
}

export type FetchedNews = {
  contents: Contents[]
  totalCount: number
  offset: number
  limit: number
}
