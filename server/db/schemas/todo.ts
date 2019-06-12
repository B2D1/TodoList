import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'todo'
  },
  content: String,
  status: Boolean
});

export default todoSchema;
