import request from './request';

class UserAPI {
  public static PREFIX = '/users';
  public login(username: string, password: string) {
    return request.post(`${UserAPI.PREFIX}/login`, {
      username,
      password,
    });
  }
  public register(username: string, password: string) {
    return request.post(`${UserAPI.PREFIX}`, {
      username,
      password,
    });
  }
}

export default UserAPI;
