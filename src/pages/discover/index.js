import React, { memo} from 'react';
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { DiscoverWrapper, TopMenu } from './style.js'
import { discoverMenu } from '@/common/local-data.js'


export default memo(function WYDiscover(props) {
  const { route } = props;//将route解构出来

  return (

    <DiscoverWrapper>
      <div className='top'>
        <TopMenu className='wrap-v1'>
          {
            discoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>

  )
})

