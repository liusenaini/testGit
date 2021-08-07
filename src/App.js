





import React, { memo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config' //安装yarn add react-router-config，并导入路由管理包
import routes from './router/index.js'
import { Provider } from 'react-redux'
import store from './store/index.js' //引入仓库


//下面用来引入子组件
import WYAppHeader from '@/components/app-header/index.js'
import WYAppfooter from '@/components/app-footer/index.js'



export default memo(function App() {
  return (
    <div>
      <Provider store={store}> {/*仓库包着组件，仓库里的数据就被组件共享了*/}
        <BrowserRouter>
          <WYAppHeader />

          {/* renderRoutes用来渲染路由组件 */}
          {renderRoutes(routes)}

          <WYAppfooter />
        </BrowserRouter>
      </Provider>
    </div>
  )
})
