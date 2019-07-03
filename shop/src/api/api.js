import api from '@/utils/http';

export const login = (data) => {
<<<<<<< HEAD
  console.log(data);
  return api({
    url: '',
    method: '',
    data: data
  });
};
export const GoodsSel = (data) => {
  return api({
    url: '/GoodsSel?token=' + data.token,
=======
  return api({
    url: '/login',
    method: 'post',
    data: data
  });
};
export const send = (data) => {
  return api({
    url: '/phone',
    method: 'post',
    data: data
  });
};
export const sendcode = (data) => {
  return api({
    url: '/phonecode',
>>>>>>> gouqun1
    method: 'post',
    data: data
  });
};
<<<<<<< HEAD
export const setCats = (data) => {
  return api({
    url: '/GoodsCats?token=' + data.token,
=======
export const register = (data) => {
  return api({
    url: '/register',
>>>>>>> gouqun1
    method: 'post',
    data: data
  });
};
<<<<<<< HEAD
export function post (url, params) {
  // return new Promise((resolve, reject) => {
  //   axios.post(url, QS.stringify(params))
  //     .then(res => {
  //       resolve(res.data);
  //     })
  //     .catch(err => {
  //       reject(err.data);
  //     });
  // });
}
=======
>>>>>>> gouqun1
