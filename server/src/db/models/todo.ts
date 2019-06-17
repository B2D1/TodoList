import { Model, model } from 'mongoose';

import { ITodoModel, todoSchema } from '../schemas/todo';

const todoModel: Model<ITodoModel> = model<ITodoModel>('Todo', todoSchema);
export default todoModel;
