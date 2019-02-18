import axios from 'axios';
import config from '../config';

const request = axios.create({
    baseURL: config.BASE_URL,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
});

export default request;
