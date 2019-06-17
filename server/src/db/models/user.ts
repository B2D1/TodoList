import { Model, model } from 'mongoose';

import { IUserModel, userSchema } from '../schemas/user';

const userModel: Model<IUserModel> = model<IUserModel>('User', userSchema);
export default userModel;
