import React, { memo,  useEffect } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { HotRecommendWrapper } from './style.js'

import WYThemeHeaderRCM from '@/components/theme-header-rcm/index.js'

import { getHotRecommendAction } from '../../store/actionCreators.js'

import WYSongsCover from '@/components/songs-cover/index.js'

export default memo(function WYHotRecommend() {
  const dispatch = useDispatch();//向仓库里存储数据 
  
  useEffect(() => {
    dispatch(getHotRecommendAction(8))//发起网络请求,存储数据
  }, [dispatch])

  const { hotRecommends } = useSelector((state)=>{//从仓库里拿数据
    return {
      hotRecommends: state.getIn(['recommend','hotRecommends'])
    }
  }, shallowEqual)
  
  return (
      <HotRecommendWrapper>
        <WYThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]}/>
        <div className="recommend-list">
          {
            hotRecommends.map((item, index) => {
              return <WYSongsCover key={item.id} info={item} />
            })
          }
        </div>
      </HotRecommendWrapper>
    )
})
