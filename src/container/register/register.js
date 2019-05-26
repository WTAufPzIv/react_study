import React from 'react'
import Logo from '../../conponent/logo/logo'
import { List,Radio,InputItem,WingBlank,WhiteSpace,Button } from 'antd-mobile'
import '../../conponent//logo/logo.css'
import { connect } from 'react-redux'
import { register } from '../../redux/user/user.redux'
import { Redirect } from 'react-router-dom'
import './login.css'
//链接，将这里的数据传到user
@connect(
    state=>state.user,
    {register}
)
class Register extends React.Component{
    constructor(props){
        super(props)
        this.handleRegister = this.handleRegister.bind(this)
        this.login = this.login.bind(this)
        this.state = { //这里的state类似于用户输入的数据在传出去之前的一个中转站
            user : '',
            pwd : '',
            repwd : '',
            type : 'student'
        }
    }
    login(){
        console.log(this.props)
        //这一句很牛逼，直接跳转到注册页面
        this.props.history.push('/login')
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleRegister(){
        this.props.register(this.state)
        console.log(this.state)
    }
    render(){
        const RadioItem = Radio.RadioItem
        return (
            <div className = "Body">
            {this.props.redirectTo?<Redirect to = {this.props.redirectTo} />:null}
                <Logo></Logo>
                <WingBlank>
                {this.props.msg?<p style = {{color:'red'}}>{this.props.msg}</p>:null}
                <List style = {{backgroundColor:'initial'}} className = 'am-list-body'>
                    <InputItem onChange = {v=>this.handleChange('user',v)}><span className = "input">用户名</span></InputItem>
                    <InputItem type = "password" onChange = {v=>this.handleChange('pwd',v)}><span className = "input">密码</span></InputItem>
                    <InputItem type = "password" onChange = {v=>this.handleChange('repwd',v)}><span className = "input">确认密码</span></InputItem>
                    <RadioItem check = {this.state.type === 'student'} onChange = {()=>this.handleChange('type','student')}>
                    <span className = "input">学生</span>
                    </RadioItem>
                    <RadioItem check = {this.state.type === 'teacher'} onChange = {()=>this.handleChange('type','teacher')}>
                    <span className = "input">教师（申请管理员）</span>
                    </RadioItem>
                </List>
                <WhiteSpace/><WhiteSpace/>
                    <WingBlank>
                    <WingBlank>
                        <Button type = "primary" onClick = {this.handleRegister} style = {{backgroundColor:'initial'}}>提交</Button>
                        <WhiteSpace/>
                        <Button type = 'primary' onClick = {this.login} style = {{backgroundColor:'initial'}}>已有账号返回登录</Button>
                    </WingBlank>
                    </WingBlank>
                </WingBlank>
                <WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/> <WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/>
            </div>
        )
    }
}

export default Register