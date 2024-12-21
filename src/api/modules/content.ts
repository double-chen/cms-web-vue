import { type ResPage, type Content } from '@/api/interface/index'
import { PORT1 } from '@/api/config/servicePort'
import http from '@/api'

/**
 * @name 内容管理模块
 */
// 获取文章列表
export const getArticleList = (params: Content.ReqArticleParams) => {
  return http.post<ResPage<Content.ResArticle>>(PORT1 + `/article/list`, params)
}
// 获取文章详情
export const getArticleById = (params: any) => {
  return http.get<Content.ResArticle>(PORT1 + `/article/detail`, params)
}

// 获取文章分类列表
export const getCategoryList = (params: any) => {
  return http.post<Content.ResCategory[]>(PORT1 + `/category/list`, params)
}

// 获取文章标签列表
export const getTagList = (params: Content.ReqTagParams) => {
  return http.post<ResPage<Content.ResTag>>(PORT1 + `/tag/list`, params)
}
