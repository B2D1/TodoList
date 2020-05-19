[![Build Status](https://travis-ci.org/B2D1/TodoList.svg?branch=master)](https://travis-ci.org/B2D1/TodoList)

## 🚩 一款基于 TS React AntD Koa2 MongoDB 实现的 TodoList 全栈应用

### [在线访问](https://baobangdong.cn:4000/)

### [项目概述](https://www.baobangdong.cn/todolist-full-stack-application/)

![](https://user-gold-cdn.xitu.io/2019/2/19/169053e1533bad8a?imageslim)

### 应用特点

- 前后端均用 TypeScript 编写
- 接口统一遵循 RESTful 风格
- 实现服务端的优雅错误处理

### 技术栈

- 语言
  - TypeScript（赋予 JS 强类型语言的特性）
- 前端
  - React（当下最流行的前端框架）
  - Axios（处理 HTTP 请求）
  - Ant-Design（阿里开源的 UI 语言框架）
  - React-Router（处理页面路由）
  - Redux（数据状态管理）
  - Redux-Saga（处理异步 Action）
- 后端
  - Koa（基于 Node.js 平台的下一代 web 开发框架）
  - Mongoose（内置数据验证， 查询构建，业务逻辑钩子等，开箱即用）

### 本地运行

```bash
# clone
git clone https://github.com/B2D1/TodoList.git

# 全局安装 nodemon
yarn global add nodemon
```

```bash
# 进入 server 文件夹，运行服务端
cd /TodoList/server

# 安装后端所需要的依赖包
yarn

# 启动后端服务，监听本地 5000 端口，请自行下载 MongoDB，并开启数据库服务
yarn run watch
```

```bash
# 开启一个新的终端，运行浏览器端
cd /TodoList

# 安装前端所需要的依赖包
yarn

# 运行项目
yarn start
```
