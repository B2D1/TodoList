<<<<<<< HEAD
import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import * as cors from "koa2-cors";

import Config from "./config";
import initDB from "./db";
import todoRouter from "./routes/todo";
import userRouter from "./routes/user";

const server = new Koa();

initDB(Config.MONGODB_URI);

server
=======
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';

import Config from './config';
import connectDB from './db';
import todoRouter from './routes/todo';
import userRouter from './routes/user';

const app = new Koa();

connectDB(Config.MONGODB_URI);

app
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
  .use(cors())
  .use(bodyParser())
  .use(userRouter.routes())
  .use(todoRouter.routes());

<<<<<<< HEAD
server.listen(Config.PORT, () => {
=======
app.listen(Config.PORT, () => {
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
  console.log(`server starts successful: http://localhost:${Config.PORT}`);
});
