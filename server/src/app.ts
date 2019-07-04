import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as cors from 'koa2-cors';

import Config from './config';
import initDB from './db';
import todoRouter from './routes/todo';
import userRouter from './routes/user';

const app = new Koa();

// const privateKey = fs.readFileSync(path.join(__dirname, './certificate/2265242_baobangdong.cn.key'), 'utf8');
// const certificate = fs.readFileSync(path.join(__dirname, './certificate/2265242_baobangdong.cn.pem'), 'utf8');
// const credentials = {
//   key: privateKey,
//   cert: certificate
// };
// const httpsServer = https.createServer(credentials, app.callback());
app
  .use(cors())
  .use(bodyParser())
  .use(userRouter.routes())
  .use(todoRouter.routes());

app.listen(Config.PORT, () => {
  console.log(`Server is running on: http://localhost:${Config.PORT}`);
});

initDB(Config.DB_URL);
