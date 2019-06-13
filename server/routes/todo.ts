import { Request } from 'koa';
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
  .get('/:userId/all', async (ctx, next) => {
    const userId = ctx.params.userId;
    try {
      const data = await todoService.getAllTodos(userId);
      if (data) {
        handleRes({
          ctx,
          data
        });
      }
    } catch (error) {
      handleRes({
        ctx,
        error_code: 1,
        msg: error.message
      });
    }
  })
  .post('/search', async (ctx, next) => {
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
    } catch (error) {
      handleRes({
        ctx,
        error_code: 1,
        msg: error.message
      });
    }
  })
  .put('/status', async (ctx, next) => {
    const payload = ctx.request.body as IPayload;
    const { todoId } = payload;
    try {
      const data = await todoService.updateTodoStatus(todoId!);
      if (data) {
        handleRes({ ctx, status_code: 202 });
      }
    } catch (error) {
      handleRes({
        ctx,
        error_code: 1,
        msg: error.message
      });
    }
  })
  .put('/content', async (ctx, next) => {
    const payload = ctx.request.body as IPayload;
    const { todoId, content } = payload;
    try {
      const data = await todoService.updateTodoContent(todoId!, content!);
      if (data) {
        handleRes({ ctx, status_code: 202 });
      }
    } catch (error) {
      handleRes({
        ctx,
        error_code: 1,
        msg: error.message
      });
    }
  })
  .post('/', async (ctx, next) => {
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
    } catch (error) {
      handleRes({
        ctx,
        error_code: 1,
        msg: error.message
      });
    }
  })
  .delete('/:todoId', async (ctx, next) => {
    const todoId = ctx.params.todoId;
    try {
      const data = await todoService.deleteTodo(todoId);
      if (data) {
        handleRes({ ctx, status_code: 204 });
      }
    } catch (error) {
      handleRes({
        ctx,
        error_code: 1,
        msg: error.message
      });
    }
  });

export default todoRouter;
