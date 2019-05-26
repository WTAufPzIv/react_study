//-------------------这是页面总入口文件-------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware,compose } from 'redux'
import  thunk  from 'redux-thunk'
import reducers from './reducer'
import './config'
import Login from './container/login/login'
import Register from './container/register/register'
import { 
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import TeacherInfo from './container/teacherinfo/teacherinfo'
import StudentInfo from './container/studentinfo/studentinfo'
import AuthRoute from './conponent/authroute/authroute'
import Dashboard from './conponent/dashboard/dashboard'
const reduxDevtools = window.devToolsExtension?window.devToolsExtension():f=>f
const store= createStore(reducers,compose(
    applyMiddleware(thunk),
    reduxDevtools
))

ReactDom.render(
    (<Provider store = {store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path = '/teacherinfo' component = {TeacherInfo}></Route>
                    <Route path = '/studentinfo' component = {StudentInfo}></Route>
                    <Route path = '/login'  component = {Login}></Route>
                    <Route path = '/register' component = {Register}></Route>
                    {/* 登录、注册、修改信息成功后统一跳转到此页面 */}
                    <Route component = {Dashboard}></Route>  
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)
