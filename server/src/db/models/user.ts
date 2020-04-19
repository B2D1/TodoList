import { model } from "mongoose";

import { IUserModel, UserSchema } from "../schemas/user";

export default model<IUserModel>("User", UserSchema);
