---
home: true
heroImage: https://cdn.jsdelivr.net/gh/taixingyiji/image_store@main/blog/logo/img.png
heroText: HCFrame
tagline: 通用框架组件
actionText: 立刻进入 →
actionLink: /pages/a3c9a2/
bannerBg: auto 
features: # 可选的
  - title: 单表查询/联合查询
    details:  前后台操作代码封装，只需配置配置表即可生成页面、表单及增删改查，批量新增，批量修改等功能。
    imgUrl: /img/web.png # 可选
  - title: Vue + Typescript 驱动
    details: 通过Vue + Typescript进行开发，前端通过面向对象等方式，减小冗余代码，组件化重复标签，进行快速开发。
    imgUrl: /img/ui.png
  - title: SSO单点登录
    details: 项目基于SSO单点登录，实现SESSION共享
    imgUrl: /img/other.png
postList: none
---

### 前端安装

``` bash
# 安装
yarn install

# 运行
yarn serve

# 打包
yarn build:prod
```

### 后台安装
``` bash
# 首先需要在编译器安装Lombok插件

# 后台为SpringBoot项目，下载后导入编译器，等待maven下载依赖

# 下载完成后运行启动类CommonApplication.java

# maven 打包
mvn clean package
```

::: warning 注意
请确保你的 jdk使用1.8 版本 ，nodejs 请使用最新的LTS版本。
:::
