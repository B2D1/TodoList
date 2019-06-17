import { Context, Request } from 'koa';
import * as Router from 'koa-router';

import UserService from '../service/user';
import handleRes from '../utils/response';

const userService = new UserService();
const userRouter = new Router({
  prefix: '/api/users'
});

interface IPayload extends Request {
  username: string;
  password: string;
}

userRouter
  .post('/login', async (ctx: Context) => {
    const payload = ctx.request.body as IPayload;
    const { username, password } = payload;
    try {
      const user = await userService.validUser(username, password);
      handleRes({
        ctx,
        data: {
          userId: user._id,
          username: user.usr
        }
      });
      return false;
    } catch (error) {
      handleRes({
        ctx,
        error_code: 1,
        msg: error.message
      });
      return false;
    }
  })
  .post('/', async (ctx: Context) => {
    const payload = ctx.request.body as IPayload;
    const { username, password } = payload;
    try {
      const data = await userService.addUser(username, password);
      if (data) {
        handleRes({
          ctx,
          status_code: 201
        });
      }
      return false;
    } catch (error) {
      handleRes({
        ctx,
        error_code: 1,
        msg: error.message
      });
      return false;
    }
  });

export default userRouter;
