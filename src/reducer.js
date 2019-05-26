//----------------------------------这是reducer入口文件------------------------------------

//合并所有reducer
import { combineReducers } from 'redux'
import { user } from './redux/user/user.redux'
export default combineReducers({user})