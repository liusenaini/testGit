



//我们通过reducer.js文件把所有的管理员合并成一个总管理员后，在通过index.js文件里将所有数据全部整理在一起
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk' //引入redux-thunk中间键,用于在dispatch的时候向后端发送网络请求
import reducer from './reducer.js' //引入合并好了的所有管理员

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//用于react-devtools工具可视化调试


//创建一个仓库
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));


export default store;
