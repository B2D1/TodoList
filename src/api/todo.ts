import request from './request';

class TodoApi {
    prefix = '/todos';
    fetchTodo(user_id: String) {
        return request.get(`${this.prefix}/${user_id}/all`);
    }
    addTodo(user_id: string, content: string) {
        return request.post(`${this.prefix}`, {
            user_id,
            content,
        });
    }
    searchTodo(user_id: string, q: string) {
        return request.post(`${this.prefix}/search`, {
            user_id,
            q,
        });
    }
    deleteTodo(todo_id: string) {
        return request.delete(`${this.prefix}/${todo_id}`);
    }
    updateTodoStatus(todo_id: string) {
        return request.put(`${this.prefix}/status`, {
            todo_id,
        });
    }
    updateTodoContent(todo_id: string, content: string) {
        return request.put(`${this.prefix}/content`, {
            todo_id,
            content,
        });
    }
}

export default TodoApi;
