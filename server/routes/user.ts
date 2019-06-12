import { Request } from 'koa';
import * as Router from 'koa-router';

import UserService from '../service/user';
import handleRes from '../utils/response';

const userService = new UserService();
const userRouter = new Router({
  prefix: '/api/users'
});

interface IPayload extends Request {
  username?: string;
  password?: string;
}

userRouter
  .post('/login', async (ctx, next) => {
    const body: IPayload = ctx.request;
    const { username, password } = body;
    try {
      const data = await userService.validUser(username, password);
      handleRes({
        ctx,
        data: {
          userId: data._id,
          username: data.usr
        }
      });
    } catch (error) {
      handleRes({
        ctx,
        error_code: 1,
        msg: error.message
      });
    }
  })
  .post('/', async (ctx, next) => {
    const body: IPayload = ctx.request;
    const { username, password } = body;
    try {
      const data = await userService.addUser(username, password);
      if (data) {
        handleRes({
          ctx,
          status_code: 201
        });
      }
    } catch (error) {
      handleRes({
        ctx,
        error_code: 1,
        msg: error.message
      });
    }
  });

export default userRouter;
