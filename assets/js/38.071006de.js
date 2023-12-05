(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{673:function(s,n,t){"use strict";t.r(n);var a=t(12),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"目录结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),n("p",[s._v("本项目已经为你生成了一个完整的开发框架，提供了涵盖后台开发的各类功能和坑位，下面是整个项目的目录结构。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("├── mock                       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mock 服务器 与 模拟数据")]),s._v("\n├── public                     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 静态资源 (会被直接复制)")]),s._v("\n│   │── favicon.ico            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# favicon图标")]),s._v("\n│   │── manifest.json          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PWA 配置文件")]),s._v("\n│   └── index.html             "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# html模板")]),s._v("\n├── src                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 源代码")]),s._v("\n│   ├── api                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ts业务代码")]),s._v("\n│   │     ├── api              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 所有请求")]),s._v("\n│   │     ├── mixins           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mixins 代码")]),s._v("\n│   │     └── views            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 页面实例代码")]),s._v("\n│   ├── assets                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主题 字体等静态资源 (由 webpack 处理加载)")]),s._v("\n│   ├── common                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通用工具类及公用方法")]),s._v("\n│   ├── components             "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局组件")]),s._v("\n│   ├── directive              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局指令")]),s._v("\n│   ├── filters                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局过滤函数")]),s._v("\n│   ├── icons                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# svg 图标")]),s._v("\n│   ├── lang                   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 国际化")]),s._v("\n│   ├── layout                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局布局")]),s._v("\n│   ├── pwa                    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PWA service worker 相关的文件")]),s._v("\n│   ├── router                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 路由")]),s._v("\n│   ├── store                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局 vuex store")]),s._v("\n│   ├── styles                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局样式")]),s._v("\n│   ├── utils                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局方法")]),s._v("\n│   ├── views                  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 所有页面")]),s._v("\n│   ├── App.vue                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 入口页面")]),s._v("\n│   ├── main.js                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 入口文件 加载组件 初始化等")]),s._v("\n│   ├── permission.ts          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 权限管理")]),s._v("\n│   ├── settings.ts            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置文件")]),s._v("\n│   └── shims.d.ts             "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 模块注入")]),s._v("\n├── tests                      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试")]),s._v("\n├── .circleci/                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自动化 CI 配置")]),s._v("\n├── .browserslistrc            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# browserslistrc 配置文件 (用于支持 Autoprefixer)")]),s._v("\n├── .editorconfig              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑相关配置")]),s._v("\n├── .env.xxx                   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 环境变量配置")]),s._v("\n├── .eslintrc.js               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# eslint 配置")]),s._v("\n├── babel.config.js            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# babel-loader 配置")]),s._v("\n├── cypress.json               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# e2e 测试配置")]),s._v("\n├── jest.config.js             "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jest 单元测试配置")]),s._v("\n├── package.json               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# package.json 依赖")]),s._v("\n├── postcss.config.js          "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# postcss 配置")]),s._v("\n├── tsconfig.json              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# typescript 配置")]),s._v("\n└── vue.config.js              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vue-cli 配置")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);