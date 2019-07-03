import axios from 'axios';

// 自定义axios实例
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

const http = axios.create({
  baseURL: '/api',
  timeout: 5000
});

export default http;
