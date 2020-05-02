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
  .post("/search", async (ctx: Context) => {
    const payload = ctx.request.body as IPayload;
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
  .put("/status", async (ctx: Context) => {
    const payload = ctx.request.body as IPayload;
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
  .put("/content", async (ctx: Context) => {
    const payload = ctx.request.body as IPayload;
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
  .post("/", async (ctx: Context) => {
    const payload = ctx.request.body as IPayload;
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
  .delete("/:todoId", async (ctx: Context) => {
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
