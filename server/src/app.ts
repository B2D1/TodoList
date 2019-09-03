import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as cors from 'koa2-cors';
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import Config from './config';
import initDB from './db';
import todoRouter from './routes/todo';
import userRouter from './routes/user';
var config = {
    domain: 'baobangdong.cn',
    https: {
        port: 4000,
        options: {
            key: fs
                .readFileSync(
                    path.resolve('../certificate/2265242_baobangdong.cn.key'),
                    'utf8'
                )
                .toString(),
            cert: fs
                .readFileSync(
                    path.resolve('../certificate2265242_baobangdong.cn.pem'),
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
    console.log(
        `HTTPS server OK: http://${config.domain}:${config.https.port}`
    );
});
initDB(Config.__MONGO_URI__);
