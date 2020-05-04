<<<<<<< HEAD
import { Context, Request } from "koa";
import * as Router from "koa-router";

import TodoService from "../service/todo";
import { StatusCode } from "../utils/enum";
import createRes from "../utils/response";

const todoService = new TodoService();
const todoRouter = new Router({
  prefix: "/api/todos",
});

interface IPayload extends Request {
  username: string;
  password: string;
  todoId: string;
  content: string;
  q: string;
  userId: string;
}

todoRouter
  .get("/:userId/all", async (ctx: Context) => {
=======
import { Context, Request } from 'koa';
import Router from 'koa-router';

import TodoService from '../services/todo';
import { StatusCode } from '../utils/enum';
import createRes from '../utils/response';

const todoService = new TodoService();
const todoRouter = new Router({
  prefix: '/api/todos',
});

todoRouter
  .get('/:userId', async (ctx: Context) => {
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
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
<<<<<<< HEAD
  .post("/search", async (ctx: Context) => {
    const payload = ctx.request.body as IPayload;
=======
  .post('/search', async (ctx: Context) => {
    const payload = ctx.request.body;
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
    const { userId, q } = payload;
    try {
      const data = await todoService.searchTodo(userId, q);
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
<<<<<<< HEAD
  .put("/status", async (ctx: Context) => {
    const payload = ctx.request.body as IPayload;
=======
  .put('/status', async (ctx: Context) => {
    const payload = ctx.request.body;
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
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
<<<<<<< HEAD
  .put("/content", async (ctx: Context) => {
    const payload = ctx.request.body as IPayload;
=======
  .put('/content', async (ctx: Context) => {
    const payload = ctx.request.body;
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
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
<<<<<<< HEAD
  .post("/", async (ctx: Context) => {
    const payload = ctx.request.body as IPayload;
=======
  .post('/', async (ctx: Context) => {
    const payload = ctx.request.body;
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
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
<<<<<<< HEAD
  .delete("/:todoId", async (ctx: Context) => {
=======
  .delete('/:todoId', async (ctx: Context) => {
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
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
