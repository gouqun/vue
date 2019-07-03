import axios from 'axios';

// 自定义axios实例
<<<<<<< HEAD
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

=======
>>>>>>> gouqun1
const http = axios.create({
  baseURL: '/api',
  timeout: 5000
});

export default http;
