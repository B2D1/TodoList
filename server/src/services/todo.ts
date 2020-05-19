import Todo from '../db/models/todo';
import User from '../db/models/user';

export default class TodoService {
  public async addTodo(userId: string, content: string) {
    const todo = new Todo({
      content,
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
      // MongoDB Text Search 对中文支持不佳
      // e.g. 当 query 为“你好”，“你好张三"不匹配，”你好，张三“匹配
      // return await User.findById(userId).populate({
      //   path: 'todos',
      //   match: { $text: { $search: query } },
      // });
      return await User.findById(userId).populate({
        path: 'todos',
        match: { content: { $regex: new RegExp(query), $options: 'i' } },
      });
    } catch (error) {
      console.log(error);
      throw new Error('查询失败 (￣o￣).zZ');
    }
  }
}
