



import { 
  CHANGE_TOP_BANNERS, 
  CHANGE_HOT_RECOMMEND 
} from './constants.js'

import { 
  reqTopBanner, 
  reqHotRecommend 
} from '@/api/index.js'


export const getTopBannerAction = () => {
  return async (dispatch) => {
    const result = await reqTopBanner()  //发送网络请求
    dispatch({type: CHANGE_TOP_BANNERS, topBanners: result.banners});
  }
}

export const getHotRecommendAction = (limit) => {
  return async (dispatch) => {
    const result = await reqHotRecommend(limit)
    dispatch({type: CHANGE_HOT_RECOMMEND, hotRecommends: result.result})
  }
}


