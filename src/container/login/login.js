import React from 'react'
import Logo from '../../conponent/logo/logo'
import { List,InputItem,WingBlank,WhiteSpace,Button } from 'antd-mobile'
import '../../conponent/logo/logo.css'
import { login } from '../../redux/user/user.redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './login.css'
@connect(
    state=>state.user,
    { login }
)
class Login extends React.Component{
    constructor(props){
        super(props);
        this.register = this.register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.state = {//这里的state类似于用户输入的数据在传出去之前的一个中转站
            user : '',
            pwd : ''
        }
    }
    register(){
        console.log(this.props)
        //直接跳转到注册页面
        this.props.history.push('/register')
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleLogin(){
        this.props.login(this.state)
    }
    render(){
        return (
            <div  className = "Body">
             {this.props.redirectTo?<Redirect to = {this.props.redirectTo} />:null}
                {/* <video  autoplay = "autoplay" loop = "loop">
                    <source src="../../conponent/img/play" type = "video/mp4"/>
                </video> */}
                <Logo></Logo>
                <WingBlank>
                {this.props.msg?<p style = {{color:'red'}}>{this.props.msg}</p>:null}
                    <List style = {{backgroundColor:'initial'}} className = 'am-list-body'>
                        <WhiteSpace/>
                        <InputItem onChange = {v=>this.handleChange('user',v)} className = "am-list-line"><span className = "input">账号</span></InputItem>
                        <WhiteSpace/>
                        <InputItem type = "password" onChange = {v=>this.handleChange('pwd',v)} className = "am-list-line"><span className = "input" >密码</span></InputItem>
                    </List>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WingBlank>
                    <WingBlank>
                    <Button type = 'primary' onClick = {this.handleLogin} style = {{backgroundColor:'initial'}}>登录</Button>
                    <WhiteSpace/>
                    <Button type = 'primary' onClick = {this.register} style = {{backgroundColor:'initial'}}>注册</Button>
                    </WingBlank>
                    </WingBlank>
                </WingBlank>
                <WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/>
                <WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/> <WhiteSpace/><WhiteSpace/><WhiteSpace/><WhiteSpace/>
            </div>
        )
    }
}

export default Login