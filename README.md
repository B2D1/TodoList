## 基于 TS + React + AntD + Koa + MongoDB 实现的 TodoList 全栈应用

![image](https://user-images.githubusercontent.com/36991862/114294191-69457700-9acf-11eb-9a27-ebe78825d171.png)


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
```

```bash
cd /TodoList/server

yarn

# 启动后端服务，监听本地 5000 端口，请自行下载 MongoDB，并开启数据库服务
yarn start
```

```bash
cd /TodoList

yarn

# 启动 react 项目
yarn start
```

### 相关链接

[TS + React + AntD + Koa2 + MongoDB 打造 TodoList 全栈应用](https://baobangdong.cn/todolist-full-stack-application/)
