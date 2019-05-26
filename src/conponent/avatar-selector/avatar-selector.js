import React from 'react'
import { Grid,List,WhiteSpace } from 'antd-mobile'
class AvatarSelector extends React.Component{
    constructor(props) {
		super(props)
		this.state={}
	}

    render(){
        const avatarList = '1,2,3,4,5,6,7,8,9,10,11,12'
        .split(',')
        .map(v=>({
            icon:require(`../img/${v}.png`),
            text:v
        }))
        const gridHeader = this.state.text
        ?(<div>
            <span>已选择头像</span>
            <img src = {this.state.icon} style={{width:'50px'}} alt = "" />
        </div>):<div>请选择头像</div>
        // .map(function(v=1){
        //     icon:require('../img/$(v).png'),
        //     text:v
        // })
        return(
            <div>
                <List renderHeader = {()=>gridHeader}>
                <Grid data = {avatarList}  onClick = {elm=>{this.setState(elm)
                {/*用来显示已选择的头像*/}
                    this.props.selectAvatar(elm.text)}}/>
                </List>
            </div>
        )
    }
}
export default AvatarSelector