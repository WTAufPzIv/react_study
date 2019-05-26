import React from 'react'
import axios from 'axios'
import reducer from '../../reducer';
import {Card, WhiteSpace,WingBlank} from 'antd-mobile'

class Student extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        axios.get('/user/list?type=teacher')
        .then(res=>{
            if(res.data.code===0){
                this.setState({data:res.data.data})
            }
        })
    }
    render(){
        const Header = Card.Header
        return (
            <div>
                <WhiteSpace/><WhiteSpace/><WhiteSpace/>
                <WingBlank>
                    {this.state.data.map(v=>(
                        v.avatar?
                        (<Card >
                            <Header
                                title = {v.user}
                                thumb = {require(`../img/${v.avatar}.png`)}
                                thumbStyle = {{height:'80px',width:'auto',borderRadius:'200px'}}
                                extra = {<span>{v.teachertip}</span>}
                            ></Header>
                        </Card>):null
                    ))}
                </WingBlank>
            </div>
        )
    }
}
export default Student