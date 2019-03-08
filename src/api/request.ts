import axios from 'axios';
import Config from '../config';

const request = axios.create({
    baseURL: Config.BASE_URL,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
});

export default request;
