const Router = require('koa-router');
const TodoService = require('../service/todo');
const handleRes = require('../utils/response');

const todoService = new TodoService();
const todoRouter = new Router({
  prefix: '/api/todos'
});

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
    const { userId, q } = ctx.request.body;
    try {
      const data = await todoService.searchTodo(userId, q);
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
    const { todoId } = ctx.request.body;
    try {
      const data = await todoService.updateTodoStatus(todoId);
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
    const { todoId, content } = ctx.request.body;
    try {
      const data = await todoService.updateTodoContent(todoId, content);
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
    const { userId, content } = ctx.request.body;
    try {
      const data = await todoService.addTodo(userId, content);
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

module.exports = todoRouter;
