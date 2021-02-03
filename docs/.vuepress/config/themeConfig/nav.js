// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '指南',
    link: '/guide/',
    items: [
      {
        text: '介绍',
        link: '/pages/a3c9a2/',
      },
      {
        text: '快速开始',
        link: '/pages/introduce/',
      },
      {
        text: '打包部署',
        link: '/pages/6fe261/',
      },
    ]
  },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '说明',
        link: '/pages/introduce/',
      },{
        text: '配置',
        link: '/pages/b8a7ad/',
      },{
        text: '代码示例',
        link: '/pages/5c0128/',
      },{
        text: '组件',
        link: '/pages/1ab4ce/',
      },
    ],
  },
]
