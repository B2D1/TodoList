import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';

import Config from './config';
import connectDB from './db';
import todoRouter from './routes/todo';
import userRouter from './routes/user';

const app = new Koa();

connectDB(Config.MONGODB_URI);

app
  .use(cors())
  .use(bodyParser())
  .use(userRouter.routes())
  .use(todoRouter.routes());

app.listen(Config.PORT, () => {
  console.log(`server starts successful: http://localhost:${Config.PORT}`);
});
