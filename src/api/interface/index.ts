// 请求响应参数（不包含data）
export interface Result {
  code: string
  msg: string
}

// 请求响应参数（包含data）

export interface ResultData<T = any> extends Result {
  data: T
}

// 分页响应参数
export interface ResPage<T> {
  list: T[]
  pageNum: number
  pageSize: number
  total: number
}

// 分页请求参数
export interface ReqPage {
  pageNum: number
  pageSize: number
}

// 内容管理模块
export namespace Content {
  export interface ReqArticleParams extends ReqPage {
    title?: string // 标题
    startTime?: string // 创建时间
    endTime?: string // 更新时间
    tagIds?: string[] // 标签id
  }
  export interface ResArticle {
    id: string
    title: string // 标题
    content: string // 内容
    summary: string // 摘要
    categoryId: string // 分类id
    categoryName: string // 分类名称
    tagIds: string[] // 标签id
    tagNames: string[] // 标签名称
    thumbnail: string // 缩略图
    isPublish: number // 是否发布
    createTime: string // 创建时间
    updateTime: string // 更新时间
  }

  export interface ReqCategoryParams extends ReqPage {
    name: string // 名称
    parentId: string // 父级Id
    isInMenu: boolean // 是否在菜单
  }
  export interface ResCategory {
    id: string
    name: string // 名称
    parentId: string // 父级Id
    isInMenu: boolean // 是否在菜单
    children: ResCategory[] // 子分类
  }

  export interface ReqTagParams {
    name?: string // 名称
  }

  export interface ResTag {
    id: string
    name: string // 名称
  }
}
