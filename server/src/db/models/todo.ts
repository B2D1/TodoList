import { model } from "mongoose";

import { ITodo, TodoSchema } from "../schemas/todo";

export default model<ITodo>("Todo", TodoSchema);
