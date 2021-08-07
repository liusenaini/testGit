


import axios from 'axios';
import { message } from 'antd'


const devBaseURL = "http://123.207.32.32:9001";
const proBaseURL = "http://123.207.32.32:9001";
const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;//定义生产环境还是开发环境
const TIMEOUT = 5000;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
});


//下面是拦截器
instance.interceptors.request.use(config => {
  // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

  // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

  // 3.params/data序列化的操作

  return config;
}, err => {

});

// instance.interceptors.response.use(res => {
//   return res.data;
// }, err => {
//   if (err && err.response) {
//     switch (err.response.status) {
//       case 400:
//         console.log("请求错误");
//         break;
//       case 401:
//         console.log("未授权访问");
//         break;
//       default:
//         console.log("其他错误信息");
//     }
//   }
//   return err;
// });

function request(url, params, type = 'GET') {
  return new Promise((resolve, reject) => {
    instance.request({
      url: url,
      method: type,
      data: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            console.log("请求错误");
            break;
          case 401:
            console.log("未授权访问");
            break;
          default:
            console.log("其他错误信息");
        }
      }
      message.error('请求出错了: ' + err.message)
    })
  })

}

export default request

