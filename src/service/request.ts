import { message } from 'antd';
import axios from 'axios';

import Config from '../config';

const request = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
});

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    message.warn(error);
  }
);

export default request;
