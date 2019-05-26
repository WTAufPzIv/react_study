import React from 'react'
import { Drawer, List, NavBar, Icon,NoticeBar,Badge } from 'antd-mobile';
import ListItem from '../../../node_modules/antd-mobile/lib/list/ListItem';
import './msg.css'
class SMsg extends React.Component {
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
                extra= "10:30"
                align="top" 
                thumb={<img src={require('../img/7.png')} alt = '' style = {{width:'65px',height:'65px',borderRadius:'200px'}}></img>} 
                thumbStyle = {{height:'50px',width:'auto',borderRadius:'200px'}} 
                multipleLine
                >某老师 <Badge text={2} /><Brief>明天交作业</Brief>
            </Item>
            <Item
                extra= "10:30"
                align="top" 
                thumb={<img src={require('../img/l.png')} alt = '' style = {{width:'65px',height:'65px',borderRadius:'200px'}}></img>} 
                thumbStyle = {{height:'50px',width:'auto',borderRadius:'200px'}} 
                multipleLine
                >李达康 <Badge text={1} /><Brief>莫听穿林打叶声</Brief>
            </Item>
            <Item
                extra= "10:30"
                align="top" 
                thumb={<img src={require('../img/g.png')} alt = '' style = {{width:'65px',height:'65px',borderRadius:'200px'}}></img>} 
                thumbStyle = {{height:'50px',width:'auto',borderRadius:'200px'}} 
                multipleLine
                >高育良 <Badge text={3} /><Brief>何妨吟啸且徐行</Brief>
            </Item>
            <Item
                extra= "10:30"
                align="top" 
                thumb={<img src={require('../img/q.png')} alt = '' style = {{width:'65px',height:'65px',borderRadius:'200px'}}></img>} 
                thumbStyle = {{height:'50px',width:'auto',borderRadius:'200px'}} 
                multipleLine
                >祁同伟 <Badge text={5} /><Brief>竹杖芒鞋轻胜马</Brief>
            </Item>
            <Item
                extra= "10:30"
                align="top" 
                thumb={<img src={require('../img/gx.png')} alt = '' style = {{width:'65px',height:'65px',borderRadius:'200px'}}></img>} 
                thumbStyle = {{height:'50px',width:'auto',borderRadius:'200px'}} 
                multipleLine
                >高小琴 <Brief>谁怕？一蓑烟雨任平生</Brief>
            </Item>
            <Item
                extra= "10:30"
                align="top" 
                thumb={<img src={require('../img/h.png')} alt = '' style = {{width:'65px',height:'65px',borderRadius:'200px'}}></img>} 
                thumbStyle = {{height:'50px',width:'auto',borderRadius:'200px'}} 
                multipleLine
                >侯亮平 <Badge text={9} /><Brief>料峭春风吹酒醒</Brief>
            </Item>
            <Item
                extra= "10:30"
                align="top" 
                thumb={<img src={require('../img/s.png')} alt = '' style = {{width:'65px',height:'65px',borderRadius:'200px'}}></img>} 
                thumbStyle = {{height:'50px',width:'auto',borderRadius:'200px'}} 
                multipleLine
                >沙瑞金 <Badge text={1} /><Brief>微冷山头斜照却相迎</Brief>
            </Item>
            <Item
                extra= "10:30"
                align="top" 
                thumb={<img src={require('../img/t.png')} alt = '' style = {{width:'65px',height:'65px',borderRadius:'200px'}}></img>} 
                thumbStyle = {{height:'50px',width:'auto',borderRadius:'200px'}} 
                multipleLine
                >Tom丁 <Badge text={2} /><Brief>回首向来萧瑟处，归去，也无风雨也无晴</Brief>
            </Item>
            
      </List>
      </div>
      )
  }
}
export default SMsg