import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  usr: {
    type: String,
    required: true,
    unique: true
  },
  psd: String
});

export default userSchema;
