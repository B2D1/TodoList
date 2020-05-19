import User from '../db/models/user';

export default class UserService {
  public async addUser(usr: string, psd: string) {
    try {
      const user = new User({
        usr,
        psd,
        todos: [],
      });
      return await user.save();
    } catch (error) {
      if (error.code === 11000) {
        // MongoError: E11000 duplicate key error collection
        throw new Error('用户名已存在 (￣o￣).zZ');
      } else {
        throw error;
      }
    }
  }
  public async validUser(usr: string, psd: string) {
    try {
      const user = await User.findOne({
        usr,
      });
      // 查询用户
      if (!user) {
        throw new Error('用户不存在 (￣o￣).zZ');
      }
      // 校验密码
      if (psd === user.psd) {
        return user;
      }
      throw new Error('密码错误 (￣o￣).zZ');
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
