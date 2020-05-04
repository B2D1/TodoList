import { Context } from 'koa';
import Router from 'koa-router';

import TodoService from '../services/todo';
import { StatusCode } from '../utils/enum';
import createRes from '../utils/response';

const todoService = new TodoService();
const todoRouter = new Router({
  prefix: '/api/todos',
});

todoRouter
  .get('/search', async (ctx: Context) => {
    const { userId, query } = ctx.query;
    try {
      const data = await todoService.searchTodo(userId, query);
      if (data) {
        createRes({
          ctx,
          data,
        });
      }
    } catch (error) {
      createRes({
        ctx,
        errorCode: 1,
        msg: error.message,
      });
    }
  })
  .get('/:userId', async (ctx: Context) => {
    const userId = ctx.params.userId;
    try {
      const data = await todoService.getAllTodos(userId);
      if (data) {
        createRes({
          ctx,
          data,
        });
      }
    } catch (error) {
      createRes({
        ctx,
        errorCode: 1,
        msg: error.message,
      });
    }
  })

  .put('/status', async (ctx: Context) => {
    const payload = ctx.request.body;
    const { todoId } = payload;
    try {
      const data = await todoService.updateTodoStatus(todoId);
      if (data) {
        createRes({ ctx, statusCode: StatusCode.Accepted });
      }
    } catch (error) {
      createRes({
        ctx,
        errorCode: 1,
        msg: error.message,
      });
    }
  })
  .put('/content', async (ctx: Context) => {
    const payload = ctx.request.body;
    const { todoId, content } = payload;
    try {
      const data = await todoService.updateTodoContent(todoId, content);
      if (data) {
        createRes({ ctx, statusCode: StatusCode.Accepted });
      }
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
    const { userId, content } = payload;
    try {
      const data = await todoService.addTodo(userId, content);
      if (data) {
        createRes({
          ctx,
          statusCode: StatusCode.Created,
          data,
        });
      }
    } catch (error) {
      createRes({
        ctx,
        errorCode: 1,
        msg: error.message,
      });
    }
  })
  .delete('/:todoId', async (ctx: Context) => {
    const todoId = ctx.params.todoId;
    try {
      const data = await todoService.deleteTodo(todoId);
      if (data) {
        createRes({ ctx, statusCode: StatusCode.NoContent });
      }
    } catch (error) {
      createRes({
        ctx,
        errorCode: 1,
        msg: error.message,
      });
    }
  });

export default todoRouter;
