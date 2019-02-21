import request from './request';

class UserApi {
    prefix = '/users';
    login(username: string, password: string) {
        return request.post(`${this.prefix}/login`, {
            username,
            password,
        });
    }
    register(username: string, password: string) {
        return request.post(`${this.prefix}`, {
            username,
            password,
        });
    }
}

export default UserApi;
