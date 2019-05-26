import React from 'react'
import { NavBar,InputItem,TextareaItem,List,Button,WhiteSpace,WingBlank,Toast } from 'antd-mobile'
import AvatarSelector from '../../conponent/avatar-selector/avatar-selector'
import './studentinfo.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { update } from '../../redux/user/user.redux'
function loadingToast() {
    Toast.loading('Loading...', 1, () => {
      console.log('Load complete !!!');
})
}
@connect(
    state=>state.user,
    { update }
)
class StudentInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            studentname:'',
            studentsex:'',
            studenttip:''
        }
    }
    onChange(key,val){
        this.setState({
            [key]:val
        })
    }

    render(){
        const path = this.props.location.pathname
		const redirect = this.props.redirectTo
        return(
            <div style = {{backgroundColor:'rgb(240,240,240)'}}>
               {redirect&&redirect!==path? <Redirect to={this.props.redirectTo}></Redirect> :null}
                <NavBar mode="dark">
                    个人信息修改
                </NavBar>
                {/* 更改头像 */}
                <AvatarSelector selectAvatar = {(imgname)=>{this.setState({avatar:imgname})}}></AvatarSelector>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <List className = "am-list-body1">
                <InputItem onChange = {(v)=>this.onChange('studentname',v)} style = {{backgroundColor:'while'}}>姓名</InputItem>
                <InputItem onChange = {(v)=>this.onChange('studentsex',v)}>性别</InputItem>
                <TextareaItem onChange = {(v)=>this.onChange('studenttip',v)} rows = {3} autoHeight title = '个性签名'></TextareaItem>
                <WingBlank>
                <WingBlank>
                <Button type = "primary" 
                onClick = {()=>{
                    this.props.update(this.state)
                    loadingToast()
                }}
                >保存</Button></WingBlank></WingBlank>
                </List>
            </div>
        )
    }
}
export default StudentInfo