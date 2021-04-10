import request from './request';

class UserAPI {
  static PREFIX = '/users';
  static login(username: string, password: string) {
    return request.post(`${UserAPI.PREFIX}/login`, {
      username,
      password,
    });
  }
  static register(username: string, password: string) {
    return request.post(`${UserAPI.PREFIX}`, {
      username,
      password,
    });
  }
}

export default UserAPI;
