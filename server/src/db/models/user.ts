import { model } from 'mongoose';

import { UserSchema, IUser } from '../schemas/user';

export default model<IUser>('User', UserSchema);
