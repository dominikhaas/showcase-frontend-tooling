import { axiosDELETE, axiosGET, axiosPOST, axiosPUT } from './AxiosUtils'
import type { ClientRequest } from './AxiosUtils'

export interface ProfileData {
  username: string
  bio: string
  image: string
  following: boolean
}

export interface ArticleData {
  id?: string
  slug?: string
  title?: string
  description?: string
  body?: string
  favorited?: boolean
  favoritesCount?: number
  createdAt?: string
  updatedAt?: string
  tagList?: string[]
  author?: ProfileData
}

export interface ArticleDataList {
  articles: ArticleData[]
  articlesCount: number
}

interface NewArticleParam {
  article: {
    title: string
    description: string
    body: string
    tagList: string[]
  }
}

interface UpdateArticleParam {
  article: {
    title: string
    description: string
    body: string
  }
}

const ArticleClient = {
  getArticles(): ClientRequest<ArticleDataList> {
    return axiosGET<ArticleDataList>('/api/articles')
  },
  findArticleBySlug(slug: string): ClientRequest<ArticleData> {
    return axiosGET<ArticleData>(`/api/articles/${slug}`, (data) => data.article)
  },
  createArticle(article: NewArticleParam): ClientRequest<ArticleData> {
    return axiosPOST<ArticleData>('/api/articles', article, (data) => data.article)
  },
  updateArticle(slug: string, article: UpdateArticleParam): ClientRequest<ArticleData> {
    return axiosPUT<ArticleData>(`/api/articles/${slug}`, article, (data) => data.article)
  },
  deleteArticle(slug: string): ClientRequest<void> {
    return axiosDELETE(`/api/articles/${slug}`)
  },
}

export default ArticleClient
