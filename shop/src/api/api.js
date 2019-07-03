import api from '@/utils/http';

export const login = (data) => {
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
    method: 'post',
    data: data
  });
};
export const register = (data) => {
  return api({
    url: '/register',
    method: 'post',
    data: data
  });
};
