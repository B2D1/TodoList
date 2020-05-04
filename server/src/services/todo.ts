import Todo from '../db/models/todo';
import User from '../db/models/user';

export default class TodoService {
  public async addTodo(userId: string, content: string) {
    const todo = new Todo({
      content,
      status: false,
    });
    try {
      const res = await todo.save();
      const user = await User.findById(userId);
      user?.todos.push(res.id);
      await user?.save();
      return res;
    } catch (error) {
      throw new Error('新增失败 (￣o￣).zZ');
    }
  }
  public async deleteTodo(todoId: string) {
    try {
      return await Todo.findByIdAndDelete(todoId);
    } catch (error) {
      throw new Error('删除失败 (￣o￣).zZ');
    }
  }
  public async getAllTodos(userId: string) {
    try {
      const res = await User.findById(userId).populate('todos');
      return res?.todos;
    } catch (error) {
      throw new Error('获取失败 (￣o￣).zZ');
    }
  }
  public async updateTodoStatus(todoId: string) {
    try {
      const oldRecord = await Todo.findById(todoId);
      const record = await Todo.findByIdAndUpdate(todoId, {
        status: !oldRecord?.status,
      });
      return record;
    } catch (error) {
      throw new Error('更新状态失败 (￣o￣).zZ');
    }
  }
  public async updateTodoContent(todoId: string, content: string) {
    try {
      return await Todo.findByIdAndUpdate(todoId, { content });
    } catch (error) {
      throw new Error('更新内容失败 (￣o￣).zZ');
    }
  }
  public async searchTodo(userId: string, query: string) {
    try {
      const res = await User.findById(userId).populate('todos');
      return res?.todos.filter((v) => v.content.includes(query));
    } catch (error) {
      throw new Error('查询失败 (￣o￣).zZ');
    }
  }
}
