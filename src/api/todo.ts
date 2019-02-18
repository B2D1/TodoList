import request from './request';

class TodoApi {
    fetchTodo(user_id: String) {
        return request.get(`/todos/${user_id}/all`);
    }
    addTodo(user_id: string, content: string) {
        return request.post(`/todos`, {
            user_id,
            content,
        });
    }
    searchTodo(user_id: string, q: string) {
        return request.get(`/todos/${user_id}/word?q=${q}`);
    }
    deleteTodo(todo_id: string) {
        return request.delete(`/todos/${todo_id}`);
    }
    updateTodoStatus(todo_id: string) {
        return request.put(`/todos/status/${todo_id}`);
    }
    updateTodoContent(todo_id: string, content: string) {
        return request.put(`/todos/content/${todo_id}`, {
            content,
        });
    }
}

export default TodoApi;
