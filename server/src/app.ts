import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';

import fs from 'fs';
import https from 'https';
import path from 'path';

import Config from './config';
import connectDB from './db';
import todoRouter from './routes/todo';
import userRouter from './routes/user';

connectDB(Config.MONGODB_URI);

var config = {
  domain: 'baobangdong.cn',
  https: {
    port: 5000,
    options: {
      key: fs
        .readFileSync(
          path.resolve(__dirname, './cert/5408545_baobangdong.cn.key'),
          'utf8'
        )
        .toString(),
      cert: fs
        .readFileSync(
          path.resolve(__dirname, './cert/5408545_baobangdong.cn.pem'),
          'utf8'
        )
        .toString(),
    },
  },
};
const server = new Koa();
server
  .use(cors())
  .use(bodyParser())
  .use(userRouter.routes())
  .use(todoRouter.routes());

const serverCallback = server.callback();

var httpsServer = https.createServer(config.https.options, serverCallback);
httpsServer.listen(config.https.port, () => {
  console.log(`HTTPS server OK: https://${config.domain}:${config.https.port}`);
});
