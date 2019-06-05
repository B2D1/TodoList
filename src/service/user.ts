import request from './request';

class UserApi {
    public static prefix = '/users';
    public login(username: string, password: string) {
        return request.post(`${UserApi.prefix}/login`, {
            username,
            password,
        });
    }
    public register(username: string, password: string) {
        return request.post(`${UserApi.prefix}`, {
            username,
            password,
        });
    }
}

export default UserApi;
