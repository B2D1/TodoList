const todoModel = require('../db/models/todo');

class TodoService {
    async addTodo(user_id, content) {
        const todo = new todoModel({
            user_id,
            content,
            status: false,
        });
        try {
            const data = await todo.save();
            return data;
        } catch (error) {}
    }
    async deleteTodo(todo_id) {
        try {
            const todo = await todoModel.findByIdAndDelete(todo_id);
            return todo;
        } catch (error) {
            throw new Error('delete failed!');
        }
    }
    async getAllTodos(user_id) {
        try {
            const todos = todoModel.find({
                user_id,
            });
            return todos;
        } catch (error) {}
    }
    async updateTodoStatus(todo_id) {
        try {
            let _record = await todoModel.findById(todo_id);
            const _status = !_record.status;
            const record = await todoModel.updateOne(
                { _id: todo_id },
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
    async updateTodoContent(todo_id, content) {
        try {
            const record = await todoModel.updateOne(
                { _id: todo_id },
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
    async searchTodo(user_id, q) {
        try {
            let record = await todoModel.find({ user_id });
            return record.filter(v => v.content.includes(q));
        } catch (error) {}
    }
}

module.exports = TodoService;
