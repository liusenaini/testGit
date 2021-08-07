import { Map } from 'immutable'

import { CHANGE_TOP_BANNERS, CHANGE_HOT_RECOMMEND } from './constants.js'

const initState = Map({
  topBanners: [],
  hotRecommends: []
})

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case CHANGE_TOP_BANNERS:
          //return { ...state, topBanners:action.topBanners } ,immutable解决这种浅拷贝出来一个新对象占用内存的问题
          return state.set('topBanners',action.topBanners)
        case CHANGE_HOT_RECOMMEND:
          return state.set('hotRecommends',action.hotRecommends)
        default:
            return state
    }
}