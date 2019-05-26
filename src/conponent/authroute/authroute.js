//--------------此文件负责收集用户信息并进行简单的跳转
import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { loadData } from '../../redux/user/user.redux'
import { connect } from 'react-redux'
@withRouter
@connect(
    null,
    { loadData }
)
class AuthRoute extends React.Component{
    componentDidMount(){
        //此处判断若用户已在登录或注册页面则不进行操作
        const publicList = ['/login','/register']
        const pathname = this.props.location.pathname
        if(publicList.indexOf(pathname)>-1){
            return null
        }
        //获取用户状态
        //识别用户：是否登录、所在页面的URL、用户的类型、用户的个人信息
        axios.get('/user/info')
         .then (res=>{//所获数据存入res
              if(res.status===200){   //是否成功获得数据
                 console.log(res)
                 if(res.data.code===0){//是否登录
                    this.props.loadData(res.data.data)
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
    render(){
        return null
    }
}


export default AuthRoute