/*
该组件用于recommend页面的主题导航栏封装
*/
import React, { memo } from 'react'

import { HeaderWrapper }  from './style.js'

import PropTypes from 'prop-types'

const WYThemeHeaderRCM =  memo(function (props) {
    const { title, keywords } = props

    return (
        <HeaderWrapper className="sprite_02">
          <div className="left">
            <h3 className="title">{title}</h3>
            <div className="keyword">
              {
                keywords.map((item, index) => {
                    return (
                      <div className="item" key={item}>
                        <a href="todo">{item}</a>
                        <span className="divider">|</span>
                      </div>
                    )
                })
              }
            </div>
          </div>

          <div className="right">
            <a href="todo">更多</a>
            <i className="icon sprite_02"></i>
          </div>
        </HeaderWrapper>
    )
})

WYThemeHeaderRCM.propTypes = { //规定传入组件的数据类型
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}

WYThemeHeaderRCM.defaultProps = { //传入数据的默认值
  keywords: []
}
export default WYThemeHeaderRCM
