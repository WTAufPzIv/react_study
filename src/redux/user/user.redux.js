import axios from 'axios'
import { getRedirectPath } from '../../util'
// const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
// const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOAD_DATA = 'LOAD_DATA'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const LOGOUT = 'LOGOUT'
const REVISE1 = 'REVISE1'
const REVISE2 = 'REVISE2'
//用户的初始状态
const initState={
    redirectTo:'',//保存用户跳转信息，指示下一步要跳转到哪
    msg:'',
    user:'',
    repwd:'',
    type:''
    // isAuth:false
}
//reducer
export function user(state = initState,action){
    switch(action.type){
        // case REGISTER_SUCCESS://注册成功
        //     return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
        // case LOGIN_SUCCESS:
        //     return {...state,msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true,...action.payload}
        case ERROR_MSG://注册失败
            return {...state,isAuth:false,msg:action.msg}
        case LOAD_DATA:
            return {...state,...action.payload}
        case AUTH_SUCCESS://此时已将用户登录，注册，修改信息合为一体使用AUTH_SUCCESS来统一管理，上面两个已经不起作用
            return {...state,msg:'',redirectTo:getRedirectPath(action.payload),...action.payload}
        case LOGOUT:
			return {...initState,redirectTo:'/login'}
        case REVISE1:
            return {redirectTo:'/teacherinfo'}
        case REVISE2:
            return {redirectTo:'/studentinfo'}
        default:
            return state
    }
}
function authSuccess(data){
    return {type:AUTH_SUCCESS,payload:data}
}
// function registerSuccess(data){
//     return {type:REGISTER_SUCCESS,payload:data}
// }
// function loginSuccess(data){
//     return {type:LOGIN_SUCCESS,payload:data}
// }
function errorMsg(msg){
    return {msg,type:ERROR_MSG}
}
export function logoutSubmit(){
	return { type:LOGOUT }
}
export function TeacherInfo(){
    return { type:REVISE1 }
}
export function StudentInfo(){
    return { type:REVISE2 }
}
export function loadData(userinfo){
    return {type:LOAD_DATA,payload:userinfo}
}
export function userinfo(){
    return dispatch=>{
        //获取用户状态
        //识别用户：是否登录、所在页面的URL、用户的类型、用户的个人信息
        axios.get('/user/info')
         .then (res=>{//所获数据存入res
              if(res.status===200){   //是否成功获得数据
                 console.log(res)
                 if(res.data.code===0){//是否登录
                     //已登录，允许显示用户请求内容
                 }
                 else{
                    //  alert('您还未登录，请先登录')
                     this.props.history.push('/login')//注意：此时的AuthRouter只是个普通的组件并不是Router组件故无法操作history方法，需加上router4提供的withRouter
                        //若未登录，则一脚踢去登录页
                    }
              }
        })
    }
}
export function login({user,pwd}){
    if(!user||!pwd){
        return errorMsg('请输入正确的登录信息')
    }
    return dispatch=>{
        axios.post('/user/login',{user,pwd})
        .then(res=>{
            if(res.status===200&&res.data.code===0){
                console.log('login_success')
                console.log(res.data.data)
                dispatch(authSuccess(res.data.data))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    } 
}
export function register({user,pwd,repwd,type}){
    if(!user||!pwd||!type){
        return errorMsg('请输入完整的注册信息')
    }
    if(pwd!==repwd){
        return errorMsg('两次密码不一致')
    }
    return dispatch=>{
    axios.post('/user/register',{user,pwd,type})
    .then(res=>{
        if(res.status===200&&res.data.code===0){
            dispatch(authSuccess({user,pwd,type}))
        }else{
            dispatch(errorMsg(res.data.msg))
        }
    })
}
}
export function update(data){//用来更新用户注册后所完善的个人信息
    return dispatch=>{
        axios.post('/user/update',data)
        .then(res=>{
            if(res.status===200&&res.data.code===0){
                dispatch(authSuccess(res.data.data))
            }else{
                dispatch(errorMsg(res.data.msg))
            }
        })
    }
}