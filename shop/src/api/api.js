import api from '@/utils/http';

export const login = (data) => {
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
    method: 'post',
    data: data
  });
};
export const setCats = (data) => {
  return api({
    url: '/GoodsCats?token=' + data.token,
    method: 'post',
    data: data
  });
};
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
