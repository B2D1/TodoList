import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as cors from 'koa2-cors';

import Config from './config';
import initDB from './db';
import todoRouter from './routes/todo';
import userRouter from './routes/user';

const app = new Koa();

app
  .use(cors())
  .use(bodyParser())
  .use(userRouter.routes())
  .use(todoRouter.routes());

app.listen(Config.PORT, () => {
  console.log(
    `${new Date().toLocaleString()}: Server is running on: http://localhost:${
      Config.PORT
    }`
  );
});

initDB(Config.DB_URL);
