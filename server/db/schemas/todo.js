const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'todo'
    },
    content: String,
    status: Boolean,
});

module.exports = todoSchema;