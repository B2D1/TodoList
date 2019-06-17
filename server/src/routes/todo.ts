import { Context, Request } from 'koa';
import * as Router from 'koa-router';

import TodoService from '../service/todo';
import handleRes from '../utils/response';

const todoService = new TodoService();
const todoRouter = new Router({
  prefix: '/api/todos'
});

interface IPayload extends Request {
  username?: string;
  password?: string;
  todoId?: string;
  content?: string;
  q?: string;
  userId?: string;
}

todoRouter
  .get('/:userId/all', async (ctx: Context) => {
    const userId = ctx.params.userId;
    try {
      const data = await todoService.getAllTodos(userId);
      if (data) {
        handleRes({
          ctx,
          data
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
  })
  .post('/search', async (ctx: Context) => {
    const payload = ctx.request.body as IPayload;
    const { userId, q } = payload;
    try {
      const data = await todoService.searchTodo(userId!, q!);
      if (data) {
        handleRes({
          ctx,
          data
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
  })
  .put('/status', async (ctx: Context) => {
    const payload = ctx.request.body as IPayload;
    const { todoId } = payload;
    try {
      const data = await todoService.updateTodoStatus(todoId!);
      if (data) {
        handleRes({ ctx, status_code: 202 });
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
  })
  .put('/content', async (ctx: Context) => {
    const payload = ctx.request.body as IPayload;
    const { todoId, content } = payload;
    try {
      const data = await todoService.updateTodoContent(todoId!, content!);
      if (data) {
        handleRes({ ctx, status_code: 202 });
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
  })
  .post('/', async (ctx: Context) => {
    const payload = ctx.request.body as IPayload;
    const { userId, content } = payload;
    try {
      const data = await todoService.addTodo(userId!, content!);
      if (data) {
        handleRes({
          ctx,
          status_code: 201,
          data
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
  })
  .delete('/:todoId', async (ctx: Context) => {
    const todoId = ctx.params.todoId;
    try {
      const data = await todoService.deleteTodo(todoId);
      if (data) {
        handleRes({ ctx, status_code: 204 });
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

export default todoRouter;
