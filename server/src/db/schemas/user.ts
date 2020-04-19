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
