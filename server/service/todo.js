const todoModel = require('../db/models/todo');

class TodoService {
    async addTodo(userId, content) {
        const todo = new todoModel({
            userId,
            content,
            status: false,
        });
        try {
            const data = await todo.save();
            return data;
        } catch (error) {}
    }
    async deleteTodo(todoId) {
        try {
            const todo = await todoModel.findByIdAndDelete(todoId);
            return todo;
        } catch (error) {
            throw new Error('delete failed!');
        }
    }
    async getAllTodos(userId) {
        try {
            const todos = todoModel.find({
                userId,
            });
            return todos;
        } catch (error) {}
    }
    async updateTodoStatus(todoId) {
        try {
            let _record = await todoModel.findById(todoId);
            const _status = !_record.status;
            const record = await todoModel.updateOne(
                { _id: todoId },
                { status: _status }
            );
            if (record.nModified) {
                return record;
            }
            throw new Error('update failed!');
        } catch (error) {
            throw new Error('delete failed!');
        }
    }
    async updateTodoContent(todoId, content) {
        try {
            const record = await todoModel.updateOne(
                { _id: todoId },
                { content }
            );
            if (record.nModified) {
                return record;
            }
            throw new Error('update failed!');
        } catch (error) {
            throw new Error('update failed!');
        }
    }
    async searchTodo(userId, q) {
        try {
            let record = await todoModel.find({ userId });
            return record.filter(v => v.content.includes(q));
        } catch (error) {}
    }
}

module.exports = TodoService;
