/*
这是轮播图组件
*/
import React, { memo, useEffect, useState, useRef, useCallback } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Carousel } from 'antd';

import { getTopBannerAction } from '../../store/actionCreators.js'

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style.js'

export default memo(function WYTopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerRef = useRef()

  const dispatch = useDispatch();//向仓库里存储数据 
  useEffect(() => {
    dispatch(getTopBannerAction())//发起网络请求
  }, [dispatch])

  const {topBanners} = useSelector((state)=>{//从仓库里拿数据
    //useSelector相当于shouldComponentUpdate生命函数，它的第二个参数，用于控制该组件是否要进行重新渲染，返回true要。
    return {
    //topBanners: state.get('recommend').get('topBanners') 可以换下面一种方式写
      topBanners: state.getIn(['recommend','topBanners'])
    }
  }, shallowEqual)

  // 控制轮播图背景
  const bannerChange = useCallback((from, to) => {
    setTimeout(() => setCurrentIndex(to), 0)
  },[])

  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20")

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2" >
        <BannerLeft>
          <Carousel  ref={bannerRef} effect="fade" autoplay beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                     <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        
        <BannerRight></BannerRight>

        {/* 控制轮播图的按钮 */}
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})


/* 
下面代码可以用redux里的hooks改写（改写见上面）,使得我们不用在用connect函数了

//向仓库里拿数据
const mapStateToProps = (state) => {
    return {
       topBanners: state.recommend.topBanners, //注意：这里不能state.topBanners，因为recommend是我们在store文件下reduce.js里合并管理员时给recommend管理员的一个标记
    }
}

//向仓库里存储数据
const mapDispatchToProps = (dispatch) => {

    return {
        getBanners() {
            dispatch(getTopBannerAction()); //利用redux-thunk中间键，在dispatch函数里传入一个函数，且该函数的参数是dispatch
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(WYRecommend)) //connect函数用来操作仓库的数据
*/