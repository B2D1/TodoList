import * as mongoose from 'mongoose';

import todoSchema from '../schemas/todo';

const todoModel = mongoose.model('Todo', todoSchema);

export default todoModel;
