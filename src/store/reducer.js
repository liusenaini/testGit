

//该文件用于合并项目里所有的管理员
import { combineReducers } from 'redux-immutable' //redux-immutable里提供了combineReducers函数，它将普通对象转换为了immutable对象

//引入各个仓库的管理员
import { reducer as recommendReducer} from '@/pages/discover/c-pages/recommend/store/index.js' //引入recommend管理员

const cReducer = combineReducers({
  recommend: recommendReducer
})

export default cReducer