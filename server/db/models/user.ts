import * as mongoose from 'mongoose';

import userSchema from '../schemas/user';

const userModel = mongoose.model('User', userSchema);

export default userModel;
