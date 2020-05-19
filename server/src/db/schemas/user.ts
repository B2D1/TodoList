import { Document, Schema } from 'mongoose';
import { ITodo } from './todo';

export interface IUser extends Document {
  usr: string;
  psd: string;
  todos: ITodo[];
}

export const UserSchema: Schema = new Schema({
  usr: {
    type: String,
    required: true,
    unique: true,
  },
  psd: {
    type: String,
    required: true,
  },
  todos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Todo',
    },
  ],
});
