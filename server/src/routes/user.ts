import { Context, Request } from 'koa';
import Router from 'koa-router';

import UserService from '../services/user';
import { StatusCode } from '../utils/enum';
import createRes from '../utils/response';

const userService = new UserService();
const userRouter = new Router({
  prefix: '/api/users',
});

userRouter
  .post('/login', async (ctx: Context) => {
    const payload = ctx.request.body;
    const { username, password } = payload;
    try {
      const user = await userService.validUser(username, password);
      createRes({
        ctx,
        data: {
          userId: user._id,
          username: user.usr,
        },
      });
    } catch (error) {
      createRes({
        ctx,
        errorCode: 1,
        msg: error.message,
      });
    }
  })
  .post('/', async (ctx: Context) => {
    const payload = ctx.request.body;
    const { username, password } = payload;
    try {
      const data = await userService.addUser(username, password);
      if (data) {
        createRes({
          ctx,
          statusCode: StatusCode.Created,
        });
      }
    } catch (error) {
      createRes({
        ctx,
        errorCode: 1,
        msg: error.message,
      });
    }
  });

export default userRouter;
