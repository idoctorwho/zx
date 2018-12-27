module.exports = {
  title: '小册',
  description: '整理的一些小册',
  search: false,
  sidebarDepth: 2,
  searchMaxSuggestions: 10,
  editLinkText: 'Edit this page on GitHub',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: getNavList(),
    sidebar: getSidebar()
  }
}

function getNavList() {
  return [
    { text: '小册', link: '/xiaoce/' },
  ]
}

function getSidebar() {
  return {
    '/xiaoce/': [
      {
        title: '收录的小册',
        collapsable: false,
        children: [
        ]
      },
      {
        title: 'Git 原理详解及实用指南',
        collapsable: true,
        children: [
          './Git 原理详解及实用指南/0什么是版本控制系统（VCS）.md',
          './Git 原理详解及实用指南/1什么是分布式版本控制系统（DVCS).md',
          './Git 原理详解及实用指南/2上手 1：新公司用 Git 管理代码，怎么快速上手？.md',
          './Git 原理详解及实用指南/3上手 2：团队工作的基本工作模型.md',
          './Git 原理详解及实用指南/4进阶 1：HEAD、master 与 branch.md',
          './Git 原理详解及实用指南/5进阶 2：push 的本质.md',
          './Git 原理详解及实用指南/6进阶 3：merge：合并 commits.md',
          './Git 原理详解及实用指南/7进阶 4：Feature Branching：最流行的工作流.md',
          './Git 原理详解及实用指南/8进阶 5：关于 add.md',
          './Git 原理详解及实用指南/9进阶 6：看看我都改了什么.md',
          './Git 原理详解及实用指南/10高级 1：不喜欢 merge 的分叉？用 rebase 吧.md',
          './Git 原理详解及实用指南/11高级 2：刚刚提交的代码，发现写错了怎么办？.md',
          './Git 原理详解及实用指南/12高级 3：写错的不是最新的提交，而是倒数第二个？.md',
          './Git 原理详解及实用指南/13高级 4：比错还错，想直接丢弃刚写的提交？.md',
          './Git 原理详解及实用指南/14高级 5：想丢弃的也不是最新的提交？.md',
          './Git 原理详解及实用指南/15高级 6：代码已经 push 上去了才发现写错？.md',
          './Git 原理详解及实用指南/16高级 7：reset 的本质——不止可以撤销提交.md',
          './Git 原理详解及实用指南/17高级 8：checkout 的本质.md',
          './Git 原理详解及实用指南/18高级 9：紧急情况：「立即给我打个包，现在马上！」.md',
          './Git 原理详解及实用指南/19高级 10：branch 删过了才想起来有用？.md',
          './Git 原理详解及实用指南/20额外说点：.gitignore——排除不想被管理的文件和目录.md',
          './Git 原理详解及实用指南/21总结.md',
        ]
      },
      {
        title: 'Vue 项目构建与开发入门',
        collapsable: true,
        children: [
          './Vue 项目构建与开发入门/0开篇：Vue CLI 3 项目构建基础.md',
          './Vue 项目构建与开发入门/1构建基础篇 1：你需要了解的包管理工具与配置项.md',
          './Vue 项目构建与开发入门/2构建基础篇 2：webpack 在 CLI 3 中的应用.md',
          './Vue 项目构建与开发入门/3构建基础篇 3：env 文件与环境设置.md',
          './Vue 项目构建与开发入门/4构建实战篇 1：单页应用的基本配置.md',
          './Vue 项目构建与开发入门/5构建实战篇 2：使用 pages 构建多页应用.md',
          './Vue 项目构建与开发入门/6构建实战篇 3：多页路由与模版解析.md',
          './Vue 项目构建与开发入门/7构建实战篇 4：项目整合与优化.md',
          './Vue 项目构建与开发入门/8开发指南篇 1：从编码技巧与规范开始.md',
          './Vue 项目构建与开发入门/9开发指南篇 2：学会编写可复用性模块.md',
          './Vue 项目构建与开发入门/10开发指南篇 3：合理划分容器组件与展示组件.md',
          './Vue 项目构建与开发入门/11开发指南篇 4：数据驱动与拼图游戏.md',
          './Vue 项目构建与开发入门/12开发指南篇 5：Vue API 盲点解析.md',
          './Vue 项目构建与开发入门/13开发拓展篇 1：扩充你的开发工具.md',
          './Vue 项目构建与开发入门/14开发拓展篇 2：将 UI 界面交给第三方库.md',
          './Vue 项目构建与开发入门/15开发拓展篇 3：尝试使用外部数据.md',
          './Vue 项目构建与开发入门/16总结篇：写在最后.md',
        ]
      },
      {
        title: '剖析 Vue.js 内部运行机制',
        collapsable: true,
        children: [
          './剖析 Vue.js 内部运行机制/0Vue.js 运行机制全局概览.md',
          './剖析 Vue.js 内部运行机制/1响应式系统的基本原理.md',
          './剖析 Vue.js 内部运行机制/2响应式系统的依赖收集追踪原理.md',
          './剖析 Vue.js 内部运行机制/3实现 Virtual DOM 下的一个 VNode 节点.md',
          './剖析 Vue.js 内部运行机制/4template 模板是怎样通过 Compile 编译的.md',
          './剖析 Vue.js 内部运行机制/5数据状态更新时的差异 diff 及 patch 机制.md',
          './剖析 Vue.js 内部运行机制/6批量异步更新策略及 nextTick 原理.md',
          './剖析 Vue.js 内部运行机制/7Vuex 状态管理的工作原理.md',
          './剖析 Vue.js 内部运行机制/8总结 常见问题解答.md',
        ]
      },
      {
        title: 'Vue.js 组件精讲',
        collapsable: true,
        children: [
          './Vue.js 组件精讲/0开篇：Vue.js 的精髓——组件.md',
          './Vue.js 组件精讲/1基础：Vue.js 组件的三个 API：prop、event、slot.md',
          './Vue.js 组件精讲/2组件的通信 1：provide  inject.md',
          './Vue.js 组件精讲/3组件的通信 2：派发与广播——自行实现 dispatch 和 broadcast 方法.md',
          './Vue.js 组件精讲/4实战 1：具有数据校验功能的表单组件——Form.md',
          './Vue.js 组件精讲/5组件的通信 3：找到任意组件实例——findComponents 系列方法.md',
          './Vue.js 组件精讲/6实战 2：组合多选框组件——CheckboxGroup Checkbox.md',
          './Vue.js 组件精讲/7Vue 的构造器——extend 与手动挂载——mount.md',
          './Vue.js 组件精讲/8实战 3：动态渲染 .vue 文件的组件—— Display.md',
          './Vue.js 组件精讲/9实战 4：全局提示组件——Alert.md',
          './Vue.js 组件精讲/10更灵活的组件：Render 函数与 Functional Render.md',
          './Vue.js 组件精讲/11实战 5：可用 Render 自定义列的表格组件——Table.md',
          './Vue.js 组件精讲/12实战 6：可用 slot-scope 自定义列的表格组件——Table.md',
          './Vue.js 组件精讲/13递归组件与动态组件.md',
          './Vue.js 组件精讲/14实战 7：树形控件——Tree.md',
          './Vue.js 组件精讲/15拓展：Vue.js 容易忽略的 API 详解.md',
          './Vue.js 组件精讲/16拓展：Vue.js 面试、常见问题答疑.md',
          './Vue.js 组件精讲/17拓展：如何做好一个开源项目（上篇）.md',
          './Vue.js 组件精讲/18拓展：如何做好一个开源项目（下篇）.md',
          './Vue.js 组件精讲/19写在最后.md',
        ]
      },
      {
        title: 'React 组合式开发实践：打造企业管理系统五大核心模块',
        collapsable: true,
        children: [
          './React 组合式开发实践：打造企业管理系统五大核心模块/0以史为鉴：前端开发的四个时代.md',
          './React 组合式开发实践：打造企业管理系统五大核心模块/1似水流年：企业管理系统的前世今生.md',
          './React 组合式开发实践：打造企业管理系统五大核心模块/2实战篇 01：开发前准备.md',
          './React 组合式开发实践：打造企业管理系统五大核心模块/3实战篇 02：项目脚手架.md',
          './React 组合式开发实践：打造企业管理系统五大核心模块/4实战篇 03：页面布局方案.md',
          './React 组合式开发实践：打造企业管理系统五大核心模块/5实战篇 04：权限管理机制.md',
          './React 组合式开发实践：打造企业管理系统五大核心模块/6实战篇 05：菜单匹配逻辑.md',
          './React 组合式开发实践：打造企业管理系统五大核心模块/7实战篇 06：消息通知设计.md',
          './React 组合式开发实践：打造企业管理系统五大核心模块/8实战篇 07：多语言支持.md',
          './React 组合式开发实践：打造企业管理系统五大核心模块/9继往开来：可视化页面搭建工具.md',
          './React 组合式开发实践：打造企业管理系统五大核心模块/10总结.md',
        ]
      },
      {
        title: 'Taro 多端开发实现原理与项目实战',
        collapsable: true,
        children: [
          './Taro 多端开发实现原理与项目实战/0开篇：前端多端统一开发背景与趋势介绍.md',
          './Taro 多端开发实现原理与项目实战/1基础篇 1：React 核心语法初识.md',
          './Taro 多端开发实现原理与项目实战/2基础篇 2：微信小程序开发入门与技术选型.md',
          './Taro 多端开发实现原理与项目实战/3基础篇 3：多端统一开发框架 Taro 的安装与使用.md',
          './Taro 多端开发实现原理与项目实战/4基础篇 4：Taro 开发说明与注意事项.md',
          './Taro 多端开发实现原理与项目实战/5基础篇 5：用 Taro 实现一个简单的 Todo 项目.md',
          './Taro 多端开发实现原理与项目实战/6基础篇 6：在 Taro 中使用 Redux.md',
          './Taro 多端开发实现原理与项目实战/7进阶篇 1：Taro 设计思想及架构.md',
          './Taro 多端开发实现原理与项目实战/8进阶篇 2：CLI 原理及不同端的运行机制.md',
          './Taro 多端开发实现原理与项目实战/9进阶篇 3：组件库及 API 的设计与适配.md',
          './Taro 多端开发实现原理与项目实战/10进阶篇 4：JSX 转换微信小程序模板的实现（上）.md',
          './Taro 多端开发实现原理与项目实战/11进阶篇 5：JSX 转换微信小程序模板的实现（下）.md',
          './Taro 多端开发实现原理与项目实战/12进阶篇 6：运行时揭秘 - 小程序运行时.md',
          './Taro 多端开发实现原理与项目实战/13进阶篇 7：运行时揭秘 - H5 运行时.md',
          './Taro 多端开发实现原理与项目实战/14进阶篇 8：运行时揭秘 - RN 运行时 .md',
          './Taro 多端开发实现原理与项目实战/15实战篇 1：多端电商平台完整项目概述及开发准备.md',
          './Taro 多端开发实现原理与项目实战/16实战篇 2：小程序云的介绍与使用.md',
          './Taro 多端开发实现原理与项目实战/17实战篇 3：通过小程序云搭建电商后台服务.md',
          './Taro 多端开发实现原理与项目实战/18实战篇 4：商品列表页开发及性能优化.md',
          './Taro 多端开发实现原理与项目实战/19实战篇 5：商品详情页面开发.md',
          './Taro 多端开发实现原理与项目实战/20实战篇 6：购物车开发.md',
          './Taro 多端开发实现原理与项目实战/21实战篇 7：结算页面开发.md',
          './Taro 多端开发实现原理与项目实战/22实战篇 8：微信小程序端用户授权处理.md',
          './Taro 多端开发实现原理与项目实战/23实战篇 9：微信小程序开发填坑指南.md',
          './Taro 多端开发实现原理与项目实战/24实战篇 10：微信小程序端及 H5 端预览适配与发布.md',
          './Taro 多端开发实现原理与项目实战/25实战篇 11：React Native 端打包与发布.md',
          './Taro 多端开发实现原理与项目实战/26总结.md',
        ]
      },
      
      {
        title: '微信小程序开发入门：从 0 到 1 实现天气小程序',
        collapsable: true,
        children: [
          './微信小程序开发入门：从 0 到 1 实现天气小程序/0开篇：微信小程序概述.md',
          './微信小程序开发入门：从 0 到 1 实现天气小程序/1基础篇 1：小程序开发基础知识.md',
          './微信小程序开发入门：从 0 到 1 实现天气小程序/2基础篇 2：小程序云开发基础知识.md',
          './微信小程序开发入门：从 0 到 1 实现天气小程序/3基础篇 3：小程序架构及其实现机制.md',
          './微信小程序开发入门：从 0 到 1 实现天气小程序/4实战篇 1：小程序开发环境搭建.md',
          './微信小程序开发入门：从 0 到 1 实现天气小程序/5实战篇 2：新鲜天气小程序简介.md',
          './微信小程序开发入门：从 0 到 1 实现天气小程序/6实战篇 3：天气页面样式布局开发.md',
          './微信小程序开发入门：从 0 到 1 实现天气小程序/7实战篇 4：天气页面数据获取和交互实现.md',
          './微信小程序开发入门：从 0 到 1 实现天气小程序/8实战篇 5：为天气页面制作雨雪效果的粒子系统.md',
          './微信小程序开发入门：从 0 到 1 实现天气小程序/9实战篇 6：心情签到页面开发.md',
          './微信小程序开发入门：从 0 到 1 实现天气小程序/10实战篇 7：对小程序进行优化.md',
          './微信小程序开发入门：从 0 到 1 实现天气小程序/11实战篇 8：小程序调试技巧和上线发布.md',
          './微信小程序开发入门：从 0 到 1 实现天气小程序/12总结与拓展.md',
        ]
      },
      {
        title: '基于 hapi 的 Node.js 小程序后端开发实践指南',
        collapsable: true,
        children: [
          './基于 hapi 的 Node.js 小程序后端开发实践指南/0开篇： 小程序的 Node.js 全栈之路.md',
          './基于 hapi 的 Node.js 小程序后端开发实践指南/1基础篇 1：小程序需求分析与基础设计.md',
          './基于 hapi 的 Node.js 小程序后端开发实践指南/2基础篇 2：后端技术选型 —— Node.js hapi.md',
          './基于 hapi 的 Node.js 小程序后端开发实践指南/3基础篇 3：欲善事先利器 —— Node.js 调试技巧.md',
          './基于 hapi 的 Node.js 小程序后端开发实践指南/4实战篇 1：项目工程初始化 —— 使用 hapi.md',
          './基于 hapi 的 Node.js 小程序后端开发实践指南/5实战篇 2：接口契约与入参校验 ——  使用 Swagger Joi.md',
          './基于 hapi 的 Node.js 小程序后端开发实践指南/6实战篇 3：表结构设计、迁移与数据填充 —— 使用 Sequelize-cli.md',
          './基于 hapi 的 Node.js 小程序后端开发实践指南/7实战篇 4：小程序列表获取 —— 使用 Sequelize.md',
          './基于 hapi 的 Node.js 小程序后端开发实践指南/8 实战篇 5：身份验证设计 —— 使用 JWT .md',
          './基于 hapi 的 Node.js 小程序后端开发实践指南/9实战篇 6：身份验证实现 —— 使用 hapi-auth-jwt2.md',
          './基于 hapi 的 Node.js 小程序后端开发实践指南/10实战篇 7：小程序登录授权 与 JWT 签发.md',
          './基于 hapi 的 Node.js 小程序后端开发实践指南/11实战篇 8：小程序订单创建 —— 使用事务.md',
          './基于 hapi 的 Node.js 小程序后端开发实践指南/12实战篇 9：小程序订单支付 —— 微信支付.md',
          './基于 hapi 的 Node.js 小程序后端开发实践指南/13实战篇 10：服务部署发布 —— 使用小程序开发者工具.md',
          './基于 hapi 的 Node.js 小程序后端开发实践指南/14拓展篇 1：系统监控与记录 —— 使用 Good 插件.md',
          './基于 hapi 的 Node.js 小程序后端开发实践指南/15拓展篇 2：系统稳定性测试 —— 使用 Lab Code.md',
          './基于 hapi 的 Node.js 小程序后端开发实践指南/16尾声 ：项目回顾，温故知新.md',
        ]
      },
      {
        title: 'Taro 多端开发实现原理与项目实战',
        collapsable: true,
        children: [
          './Taro 多端开发实现原理与项目实战/0开篇：前端多端统一开发背景与趋势介绍.md',
          './Taro 多端开发实现原理与项目实战/1基础篇 1：React 核心语法初识.md',
          './Taro 多端开发实现原理与项目实战/2基础篇 2：微信小程序开发入门与技术选型.md',
          './Taro 多端开发实现原理与项目实战/3基础篇 3：多端统一开发框架 Taro 的安装与使用.md',
          './Taro 多端开发实现原理与项目实战/4基础篇 4：Taro 开发说明与注意事项.md',
          './Taro 多端开发实现原理与项目实战/5基础篇 5：用 Taro 实现一个简单的 Todo 项目.md',
          './Taro 多端开发实现原理与项目实战/6基础篇 6：在 Taro 中使用 Redux.md',
          './Taro 多端开发实现原理与项目实战/7进阶篇 1：Taro 设计思想及架构.md',
          './Taro 多端开发实现原理与项目实战/8进阶篇 2：CLI 原理及不同端的运行机制.md',
          './Taro 多端开发实现原理与项目实战/9进阶篇 3：组件库及 API 的设计与适配.md',
          './Taro 多端开发实现原理与项目实战/10进阶篇 4：JSX 转换微信小程序模板的实现（上）.md',
          './Taro 多端开发实现原理与项目实战/11进阶篇 5：JSX 转换微信小程序模板的实现（下）.md',
          './Taro 多端开发实现原理与项目实战/12进阶篇 6：运行时揭秘 - 小程序运行时.md',
          './Taro 多端开发实现原理与项目实战/13进阶篇 7：运行时揭秘 - H5 运行时.md',
          './Taro 多端开发实现原理与项目实战/14进阶篇 8：运行时揭秘 - RN 运行时 .md',
          './Taro 多端开发实现原理与项目实战/15实战篇 1：多端电商平台完整项目概述及开发准备.md',
          './Taro 多端开发实现原理与项目实战/16实战篇 2：小程序云的介绍与使用.md',
          './Taro 多端开发实现原理与项目实战/17实战篇 3：通过小程序云搭建电商后台服务.md',
          './Taro 多端开发实现原理与项目实战/18实战篇 4：商品列表页开发及性能优化.md',
          './Taro 多端开发实现原理与项目实战/19实战篇 5：商品详情页面开发.md',
          './Taro 多端开发实现原理与项目实战/20实战篇 6：购物车开发.md',
          './Taro 多端开发实现原理与项目实战/21实战篇 7：结算页面开发.md',
          './Taro 多端开发实现原理与项目实战/22实战篇 8：微信小程序端用户授权处理.md',
          './Taro 多端开发实现原理与项目实战/23实战篇 9：微信小程序开发填坑指南.md',
          './Taro 多端开发实现原理与项目实战/24实战篇 10：微信小程序端及 H5 端预览适配与发布.md',
          './Taro 多端开发实现原理与项目实战/25实战篇 11：React Native 端打包与发布.md',
          './Taro 多端开发实现原理与项目实战/26总结.md',
        ]
      },
      {
        title: '前端性能优化原理与实践',
        collapsable: true,
        children: [
          './前端性能优化原理与实践/0开篇：知识体系与小册格局.md',
          './前端性能优化原理与实践/1网络篇 1：webpack 性能调优与 Gzip 原理.md',
          './前端性能优化原理与实践/2网络篇 2：图片优化——质量与性能的博弈.md',
          './前端性能优化原理与实践/3存储篇 1：浏览器缓存机制介绍与缓存策略剖析.md',
          './前端性能优化原理与实践/4存储篇 2：本地存储——从 Cookie 到 Web Storage、IndexDB.md',
          './前端性能优化原理与实践/5彩蛋篇：CDN 的缓存与回源机制解析.md',
          './前端性能优化原理与实践/6渲染篇 1：服务端渲染的探索与实践.md',
          './前端性能优化原理与实践/7渲染篇 2：知己知彼——解锁浏览器背后的运行机制.md',
          './前端性能优化原理与实践/8渲染篇 3：对症下药——DOM 优化原理与基本实践.md',
          './前端性能优化原理与实践/9渲染篇 4：千方百计——Event Loop 与异步更新策略.md',
          './前端性能优化原理与实践/10渲染篇 5：最后一击——回流（Reflow）与重绘（Repaint）.md',
          './前端性能优化原理与实践/11应用篇 1：优化首屏体验——Lazy-Load 初探.md',
          './前端性能优化原理与实践/12应用篇 2：事件的节流（throttle）与防抖（debounce）.md',
          './前端性能优化原理与实践/13性能监测篇：Performance、LightHouse 与性能 API.md',
          './前端性能优化原理与实践/14前方的路：希望以此为你的起点.md',
        ]
      },
      {
        title: '如何使用 Canvas 制作出炫酷的网页背景特效',
        collapsable: true,
        children: [
          './如何使用 Canvas 制作出炫酷的网页背景特效/0什么是 Canvas .md',
          './如何使用 Canvas 制作出炫酷的网页背景特效/1Canvas 的应用场景.md',
          './如何使用 Canvas 制作出炫酷的网页背景特效/2手摸手带你入门 Canvas.md',
          './如何使用 Canvas 制作出炫酷的网页背景特效/3炫酷背景特效的通性.md',
          './如何使用 Canvas 制作出炫酷的网页背景特效/4怎么实现随机粒子.md',
          './如何使用 Canvas 制作出炫酷的网页背景特效/5使你的随机粒子动起来.md',
          './如何使用 Canvas 制作出炫酷的网页背景特效/6使你的鼠标和屏幕互动.md',
          './如何使用 Canvas 制作出炫酷的网页背景特效/7制作属于你自己的特效.md',
          './如何使用 Canvas 制作出炫酷的网页背景特效/8使你的 Canvas 更加优雅.md',
        ]
      },
      {
        title: '使用 webpack 定制前端开发环境',
        collapsable: true,
        children: [
          './使用 webpack 定制前端开发环境/0webpack 的概念和基础使用.md',
          './使用 webpack 定制前端开发环境/1搭建基本的前端开发环境.md',
          './使用 webpack 定制前端开发环境/2webpack 如何解析代码模块路径.md',
          './使用 webpack 定制前端开发环境/3配置 loader.md',
          './使用 webpack 定制前端开发环境/4使用 plugin.md',
          './使用 webpack 定制前端开发环境/5更好地使用 webpack-dev-server.md',
          './使用 webpack 定制前端开发环境/6开发和生产环境的构建配置差异.md',
          './使用 webpack 定制前端开发环境/7用 HMR 提高开发效率.md',
          './使用 webpack 定制前端开发环境/8优化前端资源加载 1 - 图片加载优化和代码压缩.md',
          './使用 webpack 定制前端开发环境/9优化前端资源加载 2 - 分离代码文件.md',
          './使用 webpack 定制前端开发环境/10优化前端资源加载 3 - 进一步控制 JS 大小.md',
          './使用 webpack 定制前端开发环境/11提升 webpack 的构建速度.md',
          './使用 webpack 定制前端开发环境/12探究 webpack 内部工作流程.md',
          './使用 webpack 定制前端开发环境/13创建自己的 loader.md',
          './使用 webpack 定制前端开发环境/14创建自己的 plugin.md',
          './使用 webpack 定制前端开发环境/15总结.md',
        ]
      },
      {
        title: '大厂 H5 开发实战手册',
        collapsable: true,
        children: [
          './大厂 H5 开发实战手册/0大厂 H5 开发概述.md',
          './大厂 H5 开发实战手册/1基础页面开发.md',
          './大厂 H5 开发实战手册/2响应式页面开发.md',
          './大厂 H5 开发实战手册/3滑屏应用开发.md',
          './大厂 H5 开发实战手册/4动效开发 1：让它动起来.md',
          './大厂 H5 开发实战手册/5动效开发 2：聊一聊 3D.md',
          './大厂 H5 开发实战手册/6动效开发 3：补间动画.md',
          './大厂 H5 开发实战手册/7动效开发 4：逐帧动画.md',
          './大厂 H5 开发实战手册/8动效开发 5：SVG 动画.md',
          './大厂 H5 开发实战手册/9动效开发 6：动效之效.md',
          './大厂 H5 开发实战手册/10总结.md',
        ]
      },
      {
        title: '用 npm script 打造超溜的前端工作流',
        collapsable: true,
        children: [
          './用 npm script 打造超溜的前端工作流/0为什么选择 npm script.md',
          './用 npm script 打造超溜的前端工作流/1入门篇 01：创建并运行 npm script 命令.md',
          './用 npm script 打造超溜的前端工作流/2入门篇 02：运行多个 npm script 的各种姿势.md',
          './用 npm script 打造超溜的前端工作流/3入门篇 03：给 npm script 传递参数和添加注释.md',
          './用 npm script 打造超溜的前端工作流/4进阶篇 01：使用 npm script 的钩子.md',
          './用 npm script 打造超溜的前端工作流/5进阶篇 02：在 npm script 中使用环境变量.md',
          './用 npm script 打造超溜的前端工作流/6进阶篇 03：实现 npm script 命令自动补全.md',
          './用 npm script 打造超溜的前端工作流/7高阶篇 01：实现 npm script 跨平台兼容.md',
          './用 npm script 打造超溜的前端工作流/8高阶篇 02：把庞大的 npm script 拆到单独文件中.md',
          './用 npm script 打造超溜的前端工作流/9高阶篇 03：用 node.js 脚本替代复杂的 npm script.md',
          './用 npm script 打造超溜的前端工作流/10实战篇 01：监听文件变化并自动运行 npm script.md',
          './用 npm script 打造超溜的前端工作流/11实战篇 02：结合 live-reload 实现自动刷新.md',
          './用 npm script 打造超溜的前端工作流/12实战篇 03：在 git hooks 中运行 npm script.md',
          './用 npm script 打造超溜的前端工作流/13实战篇 04：用 npm script 实现构建流水线.md',
          './用 npm script 打造超溜的前端工作流/14实战篇 05：用 npm script 实现服务自动化运维.md',
        ]
      },
      {
        title: 'Web 前端指南与高频考题解析',
        collapsable: true,
        children: [
          './Web 前端面试指南与高频考题解析/0准备：简历编写和面试前准备.md',
          './Web 前端面试指南与高频考题解析/1一面 1：ES 基础知识点与高频考题解析.md',
          './Web 前端面试指南与高频考题解析/2一面 2：JS-Web-API 知识点与高频考题解析.md',
          './Web 前端面试指南与高频考题解析/3一面 3：CSS-HTML 知识点与高频考题解析.md',
          './Web 前端面试指南与高频考题解析/4一面 4：从容应对算法题目.md',
          './Web 前端面试指南与高频考题解析/5一面 5：浏览器相关知识点与高频考题解析.md',
          './Web 前端面试指南与高频考题解析/6一面 6：开发环境相关知识点与高频考题解析.md',
          './Web 前端面试指南与高频考题解析/7二面 1：如何回答常见的软技能问题.md',
          './Web 前端面试指南与高频考题解析/8二面 2：如何介绍项目及应对项目细节追问.md',
          './Web 前端面试指南与高频考题解析/9HR 面：谈钱不伤感情.md',
          './Web 前端面试指南与高频考题解析/10其他：面试注意事项.md',
          './Web 前端面试指南与高频考题解析/11总结与补充说明.md',
        ]
      },
      {
        title: 'Redis 深度历险：核心原理与应用实践',
        collapsable: true,
        children: [
          './Redis 深度历险：核心原理与应用实践/0开篇：授人以鱼不若授人以渔 —— Redis 可以用来做什么？.md',
          './Redis 深度历险：核心原理与应用实践/1基础：万丈高楼平地起 —— Redis 基础数据结构.md',
          './Redis 深度历险：核心原理与应用实践/2应用 1：千帆竞发 —— 分布式锁.md',
          './Redis 深度历险：核心原理与应用实践/3应用 2：缓兵之计 —— 延时队列.md',
          './Redis 深度历险：核心原理与应用实践/4应用 3：节衣缩食 —— 位图.md',
          './Redis 深度历险：核心原理与应用实践/5应用 4：四两拨千斤 —— HyperLogLog.md',
          './Redis 深度历险：核心原理与应用实践/6应用 5：层峦叠嶂 —— 布隆过滤器.md',
          './Redis 深度历险：核心原理与应用实践/7应用 6：断尾求生 —— 简单限流.md',
          './Redis 深度历险：核心原理与应用实践/8应用 7：一毛不拔 —— 漏斗限流.md',
          './Redis 深度历险：核心原理与应用实践/9应用 8：近水楼台 —— GeoHash.md',
          './Redis 深度历险：核心原理与应用实践/10应用 9：大海捞针 —— Scan.md',
          './Redis 深度历险：核心原理与应用实践/11原理 1：鞭辟入里 —— 线程 IO 模型.md',
          './Redis 深度历险：核心原理与应用实践/12原理 2：交头接耳 —— 通信协议.md',
          './Redis 深度历险：核心原理与应用实践/13原理 3：未雨绸缪 —— 持久化.md',
          './Redis 深度历险：核心原理与应用实践/14原理 4：雷厉风行 —— 管道.md',
          './Redis 深度历险：核心原理与应用实践/15原理 5：同舟共济 —— 事务.md',
          './Redis 深度历险：核心原理与应用实践/16原理 6：小道消息 —— PubSub.md',
          './Redis 深度历险：核心原理与应用实践/17原理 7：开源节流 —— 小对象压缩.md',
          './Redis 深度历险：核心原理与应用实践/18原理 8：有备无患 —— 主从同步.md',
          './Redis 深度历险：核心原理与应用实践/19集群 1：李代桃僵 —— Sentinel.md',
          './Redis 深度历险：核心原理与应用实践/20集群 2：分而治之 —— Codis.md',
          './Redis 深度历险：核心原理与应用实践/21集群 3：众志成城 —— Cluster.md',
          './Redis 深度历险：核心原理与应用实践/22拓展 1：耳听八方 —— Stream.md',
          './Redis 深度历险：核心原理与应用实践/23拓展 2：无所不知 —— Info 指令.md',
          './Redis 深度历险：核心原理与应用实践/24拓展 3：拾遗补漏 —— 再谈分布式锁.md',
          './Redis 深度历险：核心原理与应用实践/25拓展 4：朝生暮死 —— 过期策略.md',
          './Redis 深度历险：核心原理与应用实践/26拓展 5：优胜劣汰 —— LRU.md',
          './Redis 深度历险：核心原理与应用实践/27拓展 6：平波缓进 —— 懒惰删除.md',
          './Redis 深度历险：核心原理与应用实践/28拓展 7：妙手仁心 —— 优雅地使用 Jedis.md',
          './Redis 深度历险：核心原理与应用实践/29拓展 8：居安思危 —— 保护 Redis.md',
          './Redis 深度历险：核心原理与应用实践/30拓展 9：隔墙有耳 —— Redis 安全通信.md',
          './Redis 深度历险：核心原理与应用实践/31拓展 10：法力无边 —— Redis Lua 脚本执行原理.md',
          './Redis 深度历险：核心原理与应用实践/32拓展 11：短小精悍 —— 命令行工具的妙用.md',
          './Redis 深度历险：核心原理与应用实践/33源码 1：丝分缕析 —— 探索「字符串」内部.md',
          './Redis 深度历险：核心原理与应用实践/34源码 2：循序渐进 —— 探索「字典」内部.md',
          './Redis 深度历险：核心原理与应用实践/35源码 3：挨肩迭背 —— 探索「压缩列表」内部.md',
          './Redis 深度历险：核心原理与应用实践/36源码 4：风驰电掣 —— 探索「快速列表」内部.md',
          './Redis 深度历险：核心原理与应用实践/37源码 5：凌波微步 —— 探索「跳跃列表」内部.md',
          './Redis 深度历险：核心原理与应用实践/38源码 6：破旧立新 —— 探索「紧凑列表」内部.md',
          './Redis 深度历险：核心原理与应用实践/39源码 7：金枝玉叶 —— 探索「基数树」内部.md',
          './Redis 深度历险：核心原理与应用实践/40源码 8：精益求精 —— LFU vs LRU.md',
          './Redis 深度历险：核心原理与应用实践/41源码 9：如履薄冰 —— 懒惰删除的巨大牺牲.md',
          './Redis 深度历险：核心原理与应用实践/42源码 10：跋山涉水 —— 深入字典遍历.md',
          './Redis 深度历险：核心原理与应用实践/43源码 11：见缝插针 —— 探索 HyperLogLog 内部.md',
          './Redis 深度历险：核心原理与应用实践/44尾声：百尺竿头 —— 继续深造指南.md',
        ]
      },
    ],
    '/': [ '', 'contact', 'about']
  }
}