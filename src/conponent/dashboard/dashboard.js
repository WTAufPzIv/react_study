import React from 'react'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'
import '../../conponent/logo/logo.css'
import {Switch,Route} from 'react-router-dom'
import Teacher from '../../conponent/teacher/teacher'
import TMsg from '../../conponent/msg/tmsg'
import SMsg from '../../conponent/msg/msg'
import User from '../../conponent/user/user'
import Student from '../../conponent/student/student'
// function Msg(){
//     return <h2>msg</h2>
// }
// function User(){
//     return <h2>msg</h2>
// }
@connect(
    state=>state
)

class Dashboard extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        const user = this.props.user
        const { pathname } = this.props.location
        const navList = [
            //消息列表属性
            {
                path:'/teachermsg',
                text:'消息',
                icon:'msg',
                title:'消息列表',
                component:TMsg,
                hide:user.type === 'student'
            },

            {
                path:'/studentmsg',
                text:'消息',
                icon:'msg',
                title:'消息列表(23)',
                component:SMsg,
                hide:user.type === 'teacher'
            },
            //教师界面属性
            {
                path:'/teacher',
                text:'学生列表',
                icon:'teacher',
                title:'学生列表',
                component:Teacher,
                hide:user.type === 'student'
            },
            //学生界面属性
            {
                path:'/student',
                text:'教师列表',
                icon:'student',
                title:'教师列表',
                component:Student,
                hide:user.type === 'teacher'
            },
            //个人中心属性
            {
                path:'/me',
                text:'我',
                icon:'user',
                title:'个人中心',
                component:User
            }
        ]
        return (
            <div>
                <NavBar className = 'fixd-header' mode = "dard">
                    {navList.find(v=>v.path===pathname).title}
                </NavBar>
                <div style = {{height:'87vh',marginTop:'45px'}}>
                    <Switch>
                        {navList.map(v=>(
                            <Route key = {v.path} path = {v.path} component = {v.component}></Route>
                        ))}
                    </Switch>
                </div>
                <NavLinkBar data = {navList}></NavLinkBar>
            </div>
        )
    }
}
export default Dashboard