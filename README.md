## 🚩 一款基于 TS React Antd Koa2 MongoDB 实现的 TodoList 全栈应用

### 线上访问地址

[https://b2d1.top:5000/](https://b2d1.top:5000/)（自己搭建的阿里云服务器，已设置 HTTPS 安全，不过由于是学生版，首屏加载速度较慢，请耐心等待，后续会进行优化）

### 应用效果

前后端分离开发，RESTful 接口联调，实现用户的登录注册，todo 的关键词查询，内容修改，状态更改，记录删除，是一个非常值得入手实践的全栈项目。     
[掘金文章地址](https://juejin.im/post/5c6cda0ae51d457139114898)

![](https://user-gold-cdn.xitu.io/2019/2/19/169053e1533bad8a?imageslim)

### 技术栈

-   前端
    -   TypeScript（使 JS 成为强类型语言）
    -   React（当下最流行的前端框架）
    -   Axios（处理 HTTP 请求）
    -   Ant-Design（UI 框架）
    -   React-Router（处理页面路由）
    -   Redux（数据状态管理）
    -   Redux-Saga（处理异步 Action）
-   后端
    -   Koa2（基于 Node.js 平台的下一代 web 开发框架）
    -   MongoDB（非关系型数据库）

### 本地运行

```
git clone https://github.com/B2D1/TodoList.git // clone到本地
```

```
cd /TodoList/server // 进入server文件夹

npm install // 安装后端所需要的NPM包

node app // 启动后端服务，监听本地5000端口，请自行下载MongoDB，并开启数据库服务
```

```
// 开启一个新的终端

cd /TodoList // 进入TodoList文件夹

npm install // 安装前端所需要的NPM包

npm start // 运行项目
```
