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
  .use(cors())
  .use(bodyParser())
  .use(userRouter.routes())
  .use(todoRouter.routes());

server.listen(Config.PORT, () => {
  console.log(`server starts successful: http://localhost:${Config.PORT}`);
});
