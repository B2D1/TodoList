import request from './request';

class TodoAPI {
  static PREFIX = '/todos';
  static fetchTodo(userId: string) {
    return request.get(`${TodoAPI.PREFIX}/${userId}`);
  }
  static addTodo(userId: string, content: string) {
    return request.post(`${TodoAPI.PREFIX}`, {
      userId,
      content,
    });
  }
  static searchTodo(userId: string, query: string) {
    return request.get(
      `${TodoAPI.PREFIX}/search?userId=${userId}&query=${query}`
    );
  }
  static deleteTodo(todoId: string) {
    return request.delete(`${TodoAPI.PREFIX}/${todoId}`);
  }
  static updateTodoStatus(todoId: string) {
    return request.put(`${TodoAPI.PREFIX}/status`, {
      todoId,
    });
  }
  static updateTodoContent(todoId: string, content: string) {
    return request.put(`${TodoAPI.PREFIX}/content`, {
      todoId,
      content,
    });
  }
}

export default TodoAPI;
