const Router = require('koa-router');
const TodoService = require('../service/todo');
const handleRes = require('../utils/response');

const todoService = new TodoService();
const todoRouter = new Router({
    prefix: '/api/todos',
});

todoRouter
    .get('/:user_id/all', async (ctx, next) => {
        const user_id = ctx.params.user_id;
        try {
            const data = await todoService.getAllTodos(user_id);
            if (data) {
                handleRes({
                    ctx,
                    data,
                });
            }
        } catch (error) {}
    })
    .post('/search', async (ctx, next) => {
        const { user_id, q } = ctx.request.body;
        try {
            const data = await todoService.searchTodo(user_id, q);
            if (data) {
                handleRes({
                    ctx,
                    data,
                });
            }
        } catch (error) {}
    })
    .put('/status', async (ctx, next) => {
        const { todo_id } = ctx.request.body;
        try {
            const data = await todoService.updateTodoStatus(todo_id);
            if (data) {
                handleRes({ ctx, status_code: 202 });
            }
        } catch (error) {
            handleRes({
                ctx,
                status_code: 200,
                msg: '记录不存在',
                error_code: 1,
            });
        }
    })
    .put('/content', async (ctx, next) => {
        const { todo_id, content } = ctx.request.body;
        try {
            const data = await todoService.updateTodoContent(todo_id, content);
            if (data) {
                handleRes({ ctx, status_code: 202 });
            }
        } catch (error) {
            handleRes({
                ctx,
                status_code: 200,
                msg: '记录不存在',
                error_code: 1,
            });
        }
    })
    .post('/', async (ctx, next) => {
        const { user_id, content } = ctx.request.body;
        try {
            const data = await todoService.addTodo(user_id, content);
            if (data) {
                handleRes({
                    ctx,
                    status_code: 201,
                    data,
                });
            }
        } catch (error) {}
    })
    .delete('/:todo_id', async (ctx, next) => {
        const todo_id = ctx.params.todo_id;
        try {
            const data = await todoService.deleteTodo(todo_id);
            if (data) {
                handleRes({ ctx, status_code: 204 });
            }
        } catch (error) {
            handleRes({
                ctx,
                status_code: 200,
                msg: '记录不存在',
                error_code: 1,
            });
        }
    });

module.exports = todoRouter;
