[![Build Status](https://travis-ci.org/B2D1/TodoList.svg?branch=master)](https://travis-ci.org/B2D1/TodoList)

<<<<<<< HEAD
## 🚩 一款基于 TS React Antd Koa2 MongoDB 实现的 TodoList 全栈应用
### [线上访问](https://baobangdong.cn:4000/)
=======
## 🚩 一款基于 TS React AntD Koa2 MongoDB 实现的 TodoList 全栈应用

### [在线访问](https://baobangdong.cn:4000/)

>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
### [项目概述](https://www.baobangdong.cn/todolist-full-stack-application/)

![](https://user-gold-cdn.xitu.io/2019/2/19/169053e1533bad8a?imageslim)

<<<<<<< HEAD
### 应用功能点

- 前后端均用 `TS` 编写
- 自主设计 `RESTful` 接口、数据库，并实现前后端分离开发
- 实现用户的登录注册
- 实现 `Todo` 的关键词查询，内容修改，状态更改，记录删除
- 服务端的优雅错误处理

### 技术栈

- 前端
  - TypeScript（赋予 JS 强类型语言的特性）
=======
### 应用特点

- 前后端均用 TypeScript 编写
- 接口统一遵循 RESTful 风格
- 实现服务端的优雅错误处理

### 技术栈

- 语言
  - TypeScript（赋予 JS 强类型语言的特性）
- 前端
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
  - React（当下最流行的前端框架）
  - Axios（处理 HTTP 请求）
  - Ant-Design（阿里开源的 UI 语言框架）
  - React-Router（处理页面路由）
  - Redux（数据状态管理）
  - Redux-Saga（处理异步 Action）
- 后端
<<<<<<< HEAD
  - Koa2（基于 Node.js 平台的下一代 web 开发框架）
  - MongoDB（非关系型数据库）
=======
  - Koa（基于 Node.js 平台的下一代 web 开发框架）
  - Mongoose（内置数据验证， 查询构建，业务逻辑钩子等，开箱即用）
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb

### 本地运行

```bash
# clone
git clone https://github.com/B2D1/TodoList.git

<<<<<<< HEAD
# 全局安装 typescript
cnpm i typescript -g
=======
# 全局安装 TypeScript
yarn global add typescript
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
```

```bash
# 进入 server 文件夹，运行服务端
cd /TodoList/server

# 安装后端所需要的依赖包
<<<<<<< HEAD
cnpm i

# 启动后端服务，监听本地5000端口，请自行下载MongoDB，并开启数据库服务
npm run develop
=======
yarn

# 启动后端服务，监听本地 5000 端口，请自行下载 MongoDB，并开启数据库服务
npm run watch
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
```

```bash
# 开启一个新的终端，运行浏览器端
cd /TodoList

# 安装前端所需要的依赖包
<<<<<<< HEAD
cnpm i

# 运行项目
npm run start
=======
yarn

# 运行项目
yarn start
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
```
