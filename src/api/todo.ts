import request from './request';

class TodoApi {
    public static prefix = '/todos';
    public fetchTodo(userId: string) {
        return request.get(`${TodoApi.prefix}/${userId}/all`);
    }
    public addTodo(userId: string, content: string) {
        return request.post(`${TodoApi.prefix}`, {
            userId,
            content,
        });
    }
    public searchTodo(userId: string, q: string) {
        return request.post(`${TodoApi.prefix}/search`, {
            userId,
            q,
        });
    }
    public deleteTodo(todoId: string) {
        return request.delete(`${TodoApi.prefix}/${todoId}`);
    }
    public updateTodoStatus(todoId: string) {
        return request.put(`${TodoApi.prefix}/status`, {
            todoId,
        });
    }
    public updateTodoContent(todoId: string, content: string) {
        console.log(todoId,content);
        return request.put(`${TodoApi.prefix}/content`, {
            todoId,
            content,
        });
    }
}

export default TodoApi;
