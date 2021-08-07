import React, { memo } from 'react'

import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style.js'

import WYTopBanner from './c-cpns/top-banner/index.js'
import WYHotRecommend from './c-cpns/hot-recommend/index.js'
import WYNewAlbum from './c-cpns/new-album/index.js'
import WYRankingRecommend from './c-cpns/ranking-recommend/index.js'

function WYRecommend(props) {  
  return (
    <RecommendWrapper>
      <WYTopBanner/>

      <Content className="wrap-v2">
        <RecommendLeft>
          <WYHotRecommend/>
          <WYNewAlbum />
          <WYRankingRecommend />
        </RecommendLeft>

        <RecommendRight>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}


export default memo(WYRecommend)
