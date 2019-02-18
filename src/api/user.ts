import request from './request';

class UserApi {
    login(username: string, password: string) {
        return request.post('/users/login', {
            username,
            password,
        });
    }
    register(username: string, password: string) {
        return request.post('/users/register', {
            username,
            password,
        });
    }
}

export default UserApi;
