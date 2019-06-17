import { Document, Schema, SchemaTypes } from 'mongoose';

import { IUser } from '../../interface';

export interface IUserModel extends IUser, Document {}

export const userSchema: Schema = new Schema({
  usr: {
    type: SchemaTypes.String,
    required: true,
    unique: true
  },
  psd: SchemaTypes.String
});
