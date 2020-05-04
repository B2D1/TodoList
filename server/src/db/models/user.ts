<<<<<<< HEAD
import { model } from "mongoose";

import { IUserModel, UserSchema } from "../schemas/user";

export default model<IUserModel>("User", UserSchema);
=======
import { model } from 'mongoose';

import { UserSchema, IUser } from '../schemas/user';

export default model<IUser>('User', UserSchema);
>>>>>>> dfd11b333641af3fca46d4ad213466fb24de52cb
