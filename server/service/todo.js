const todoModel = require('../db/models/todo');

class TodoService {
  async addTodo(userId, content) {
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
  async deleteTodo(todoId) {
    try {
      return await todoModel.findByIdAndDelete(todoId);
    } catch (error) {
      throw new Error('删除失败 (￣o￣).zZ');
    }
  }
  async getAllTodos(userId) {
    try {
      return todoModel.find({
        userId
      });
    } catch (error) {
      throw new Error('获取失败 (￣o￣).zZ');
    }
  }
  async updateTodoStatus(todoId) {
    try {
      let _record = await todoModel.findById(todoId);
      const record = await todoModel.updateOne(
        { _id: todoId },
        { status: !record.status }
      );
      // mongodb 修改标志位
      if (record.nModified) {
        return record;
      }
    } catch (error) {
      throw new Error('更新状态失败 (￣o￣).zZ');
    }
  }
  async updateTodoContent(todoId, content) {
    try {
      const record = await todoModel.updateOne({ _id: todoId }, { content });
      if (record.nModified) {
        return record;
      }
    } catch (error) {
      throw new Error('更新内容失败 (￣o￣).zZ');
    }
  }
  async searchTodo(userId, q) {
    try {
      let record = await todoModel.find({ userId });
      return record.filter((v) => v.content.includes(q));
    } catch (error) {
      throw new Error('查询失败 (￣o￣).zZ');
    }
  }
}

module.exports = TodoService;
