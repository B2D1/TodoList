import { Document, Schema } from 'mongoose';

export interface ITodo extends Document {
  content: string;
  status: boolean;
}

export const TodoSchema: Schema = new Schema({
  content: String,
  status: {
    type: Boolean,
    default: false,
  },
});

TodoSchema.index({ content: 'text' });
