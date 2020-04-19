import { model } from "mongoose";

import { ITodoModel, TodoSchema } from "../schemas/todo";

export default model<ITodoModel>("Todo", TodoSchema);
