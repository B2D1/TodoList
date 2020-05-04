<<<<<<< HEAD
import { Document, Schema, SchemaTypes } from "mongoose";

import { IUser } from "../../interface";

export const UserSchema: Schema = new Schema({
  usr: {
    type: SchemaTypes.String,
    required: true,
    unique: true,
  },
  psd: SchemaTypes.String,
});

export interface IUserModel extends IUser, Document {}
=======
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
  psd: String,
  todos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Todo',
    },
  ],
});
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
