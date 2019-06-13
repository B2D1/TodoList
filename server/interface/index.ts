import { Document } from 'mongoose';

export interface ITodo extends Document {
  userId: string;
  content: string;
  status: boolean;
}

export interface IUser extends Document {
  usr: string;
  psd: string;
}
