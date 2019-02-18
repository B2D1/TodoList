const mongoose = require('mongoose');
const todoSchema = require('../schemas/todo');

const todoModel = mongoose.model('Todo', todoSchema);

module.exports = todoModel;