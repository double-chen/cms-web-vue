import Mock from 'mockjs'

export default function initLocalMock() {
  // 文章列表
  Mock.mock('/cms/article/list', 'post', options => {
    const query = JSON.parse(options.body)
    console.log('options', options)
    const key = `list|${query.pageSize}`

    const data = Mock.mock({
      [key]: [
        {
          id: '@string(number,18)',
          title: query.title ? query.title : '@ctitle(5, 10)',
          content: '',
          summary: '@cparagraph(3, 5)',
          categoryId: '@string(number,18)',
          categoryName: '@ctitle(2, 4)',
          'tagIds|1-5': ['@string(number,18)'],
          'tagNames|1-5': ['@string("lower", 4)'],
          thumbnail: '@image("200x200", "@color", "Thumbnail")',
          isPublish: '@boolean()',
          address: '@city(true)',
          createTime: '@date @time',
          updateTime: '@date @time',
        },
      ],
      pageNum: Number(query.pageNum),
      pageSize: Number(query.pageSize),
      total: 2000,
    })

    return {
      code: 200,
      data,
      msg: '成功',
    }
  })

  // 文章详情
  Mock.mock('/article/detail', 'get', options => {
    // 从请求 URL 中提取参数
    const url = new URL(options.url, 'http://example.com')
    const id = url.searchParams.get('id')

    return {
      code: 200,
      data: {
        id: id,
        title: '@ctitle(5, 10)',
        content: '',
        summary: '@cparagraph(3, 5)',
        categoryId: '@string(number,18)',
        categoryName: '@ctitle(2, 4)',
        'tagIds|1-5': ['@string(number,18)'],
        'tagNames|1-5': ['@string("lower", 4)'],
        thumbnail: '@image("200x200", "@color", "Thumbnail")',
        isPublish: '@boolean()',
        address: '@city(true)',
        createTime: '@date @time',
        updateTime: '@date @time',
      },
      msg: '成功',
    }
  })

  // 文章分类列表
  Mock.mock('/category/list', 'post', options => {
    const query = options.body
    if (query.parentId) {
      return {
        code: 200,
        data: {
          'list|4': [
            {
              id: '@string(number,18)',
              name: '@ctitle(5, 10)',
              parentId: '@string(number,18)',
              isInMenu: '@boolean()',
              isLeaf: '@boolean()',
            },
          ],
          pageNum: Number(query.pageNum),
          pageSize: Number(query.pageSize),
          total: 4,
        },
        msg: '成功',
      }
    }

    return {
      code: 200,
      data: {
        'list|4': [
          {
            id: '@string(number,18)',
            name: '@ctitle(5, 10)',
            parentId: '@string(number,18)',
            isInMenu: '@boolean()',
            'children|4': [
              {
                id: '@string(number,18)',
                name: '@ctitle(5, 10)',
                parentId: '@string(number,18)',
                isInMenu: '@boolean()',
              },
            ],
          },
        ],
        pageNum: Number(query.pageNum),
        pageSize: Number(query.pageSize),
        total: 4,
      },
      msg: '成功',
    }
  })

  // 标签列表
  Mock.mock('/tag/list', 'post', options => {
    const query = options.body

    return {
      code: 200,
      data: {
        'list|10': [
          {
            id: '@string(number,18)',
            name: '@ctitle(5, 10)',
          },
        ],
        pageNum: Number(query.pageNum),
        pageSize: Number(query.pageSize),
        total: 100,
      },
      msg: '成功',
    }
  })
}
