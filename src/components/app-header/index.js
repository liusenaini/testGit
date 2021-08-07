

import React, { memo } from 'react'


import { NavLink } from 'react-router-dom';
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style.js'; //引入css样式组件
import { SearchOutlined } from '@ant-design/icons' //引入ant图标
import { Input } from "antd"; //引入antd UI 组件库
import { headerLinks } from '@/common/local-data' //引入我们自己的准备的导航栏数据


export default memo(function WYAppHeader() {


    return (
        <HeaderWrapper>
            <div className='content wrap-v1'>
                {/* 头部左边部分 */}
                <HeaderLeft>
                    {/* 网易logo图片 */}
                    <a href="/discover" className="logo sprite_01">网易云音乐</a>
                    {/* 头部左边导航栏 */}
                    <div className="select-list">
                        {
                            headerLinks.map((item, index) => {
                                return (
                                    <div key={item.title} className="select-item">
                                        {
                                            index < 3 ? (
                                                <NavLink to={item.link}>
                                                    {item.title}
                                                    <i className='sprite_01 icon'></i>
                                                </NavLink>
                                            ) : (<a href={item.link}>{item.title}</a>)
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>

                </HeaderLeft>

                {/* 头部右边部分 */}
                <HeaderRight>
                    <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
                    <div className="center">创作者中心</div>
                    <div>登录</div>
                </HeaderRight>
            </div>


            {/* 头部下面的红线 */}
            <div className='divider'></div>

        </HeaderWrapper>
    )
})
