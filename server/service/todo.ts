import todoModel from '../db/models/todo';
import { ITodo } from '../interface';

export default class TodoService {
  public async addTodo(userId: string, content: string) {
    const todo = new todoModel({
      userId,
      content,
      status: false
    });
    try {
      return await todo.save();
    } catch (error) {
      throw new Error('新增失败 (￣o￣).zZ');
    }
  }
  public async deleteTodo(todoId: string) {
    try {
      return await todoModel.findByIdAndDelete(todoId);
    } catch (error) {
      throw new Error('删除失败 (￣o￣).zZ');
    }
  }
  public async getAllTodos(userId: string) {
    try {
      return todoModel.find({
        userId
      });
    } catch (error) {
      throw new Error('获取失败 (￣o￣).zZ');
    }
  }
  public async updateTodoStatus(todoId: string) {
    try {
      const oldRecord = (await todoModel.findById(todoId)) as ITodo;
      const record = await todoModel.updateOne(
        { _id: todoId },
        { status: !oldRecord.status }
      );
      // mongodb 修改标志位
      if (record.nModified) {
        return record;
      }
    } catch (error) {
      throw new Error('更新状态失败 (￣o￣).zZ');
    }
  }
  public async updateTodoContent(todoId: string, content: string) {
    try {
      const record = await todoModel.updateOne({ _id: todoId }, { content });
      if (record.nModified) {
        return record;
      }
    } catch (error) {
      throw new Error('更新内容失败 (￣o￣).zZ');
    }
  }
  public async searchTodo(userId: string, q: string) {
    try {
      const record = (await todoModel.find({ userId })) as ITodo[];
      return record.filter((v) => v.content.includes(q));
    } catch (error) {
      throw new Error('查询失败 (￣o￣).zZ');
    }
  }
}
