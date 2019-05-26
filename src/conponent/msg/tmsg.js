import React from 'react'
import { Drawer, List, NavBar, Icon,NoticeBar,Badge } from 'antd-mobile';
import ListItem from '../../../node_modules/antd-mobile/lib/list/ListItem';
import './msg.css'
class TMsg extends React.Component {
  render(){
    const Item = List.Item
    const Brief = Item.Brief
      return (
          <div>
        <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
        注意：聊天功能暂未实现，别瞎点了，此页面只用于测试用途      Note: the chat function is not yet implemented. Don't be blind. This page is for testing purposes only.
      </NoticeBar>
      <List class = "am-list-body2">
             <Item
                extra= "10:31"
                align="top" 
                thumb={require('../img/8.png')} 
                thumbStyle = {{height:'50px',width:'auto',borderRadius:'200px'}} 
                multipleLine
                >张晓辉 <Badge text={1} /><Brief>好的</Brief>
            </Item>
      </List>
      </div>
      )
  }
}
export default TMsg