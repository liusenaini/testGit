




//此文件用于管理接口
import request from './request.js'



//轮播图接口
export const reqTopBanner = () => request('/banner', null ,'GET')

//热门推荐接口
export const reqHotRecommend = (params) => request('/personalized?limit=' + params, null, 'GET')

