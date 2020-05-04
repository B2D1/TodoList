<<<<<<< HEAD
import { Document, Schema, SchemaTypes } from "mongoose";

import { ITodo } from "../../interface";

export const TodoSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "todo",
  },
  content: SchemaTypes.String,
  status: SchemaTypes.Boolean,
});

export interface ITodoModel extends ITodo, Document {}
=======
import { Document, Schema } from 'mongoose';

export interface ITodo extends Document {
  content: string;
  status: boolean;
}

export const TodoSchema: Schema = new Schema({
  content: String,
  status: Boolean,
});
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
