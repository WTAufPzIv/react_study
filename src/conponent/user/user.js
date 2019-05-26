import React from 'react'
import {connect} from 'react-redux'
import browserCookie from 'browser-cookies'
import { Result,Modal,WhiteSpace,List,WingBlank,Button } from 'antd-mobile';
import { logoutSubmit } from '../../redux/user/user.redux'
import { TeacherInfo } from '../../redux/user/user.redux'
import { StudentInfo } from '../../redux/user/user.redux'
import { Redirect } from 'react-router-dom'
import './user.css'
@connect(
	state=>state.user,
      {logoutSubmit}
        // {TeacherInfo},
        // {StudentInfo}
)
class User extends React.Component{
	constructor(props){
		super(props)
		this.logout = this.logout.bind(this)
	}
	logout(){
        //browserCookie.erase('userid')
        //用于清除cookie
		 const alert = Modal.alert

		 alert('注销', '确认退出登录吗???', [
		       { text: '取消', onPress: () => console.log('cancel') },
		       { text: '确认', onPress: () => {
		       	browserCookie.erase('userid')
		       	this.props.logoutSubmit()
		       }}
		     ])
	}
	render(){
		//const props = this.props
		const Item = List.Item
		const Brief = Item.Brief
		console.log(this.props)
		return this.props.user?(
			<div>
                <WhiteSpace/><WhiteSpace/>
                <WingBlank>
                <Result
                    img={<img src={require(`../img/${this.props.avatar}.png`)} style={{width:'65px',borderRadius:'200px'}} alt="" />}
                    title={this.props.user}
                    message={this.props.type=='teacher'?this.props.teachertip:this.props.studenttip}
                /></WingBlank>
				
                <List renderHeader={() => '详细信息'} className="my-list">
                    <Item arrow="horizontal" multipleLine onClick={() => {
                        let url = (this.props.type === 'teacher')?'teacher':'student'
                        url += 'info'
                        this.props.history.push(`${url}`)
                        //  (this.props.type === 'teacher')?(this.props.TeacherInfo()):(this.props.StudentInfo())
                    }}>
                    姓名 <Brief>{this.props.type==='teacher'?this.props.teachername:this.props.studentname}</Brief>
                    </Item>
                    <Item
                    arrow="horizontal"
                    multipleLine
                    onClick={()=> {
                        let url = (this.props.type === 'teacher')?'teacher':'student'
                            url += 'info'
                        this.props.history.push(`${url}`)
                    }}
                    platform="android"
                    >
                    性别<Brief>{this.props.type=='teacher'?this.props.teachersex:this.props.studentsex}</Brief>
                    </Item>
                    <Item
                    multipleLine
                    >
                    身份(不可更改) <Brief>{this.props.type==='teacher'?'教师':'学生'}</Brief>
                    </Item>
                    <Item
                    arrow="horizontal"
                    thumb={require(`./img/tip.png`)}
                    multipleLine
                    onClick={() => {
                        let url = (this.props.type === 'teacher')?'teacher':'student'
                            url += 'info'
                        this.props.history.push(`${url}`)
                    }}
                    >
                    个人简介 <Brief>{this.props.type=='teacher'?this.props.teachertip:this.props.studenttip}</Brief>
                    </Item>

                </List>
                
				<WhiteSpace></WhiteSpace>
                
                <WingBlank>
                    <WingBlank>
					    <Button onClick={this.logout} type = "warning">退出登录</Button>
                    </WingBlank>
                </WingBlank>
				
			</div>
		):<Redirect to={this.props.redirectTo} />

	}
}


export default User
