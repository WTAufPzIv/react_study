const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const utils = require('utility')
const _filter = {'pwd':0,'_v':0}//定义查询规则，防止密码暴露
Router.get('/list',function(req,res){
    const {type} = req.query
    User.find({type},function(err,doc){
        return res.json({code:0,data:doc})
    })
    // User.remove({type:'student'},function(err,doc){
    //     return res.json(doc)
    // })
})


Router.post ('/login',function(req,res){
    const {user,pwd} = req.body
    User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(err,doc){
        if(!doc){
            return res.json({code:1,msg:'用户名或密码错误'})
        }
        res.cookie('userid',doc._id)
        return res.json({code:0,data:doc})
    })
})

Router.post('/update',function(req,res){
    const userid = req.cookies.userid
    // const {tip} = req.body
    if(!userid){
        return json.dumps({code:1})
    }
    const body = req.body
    User.findByIdAndUpdate(userid,body,function(err,doc){
        const data = Object.assign({},{
            user:doc.user,
            type:doc.type
        },body)
        return res.json({ code:0,data })
    })
})
Router.post ('/register',function(req,res){
    console.log(req.body)
    const {user,pwd,type} = req.body
    //提交前进行一次查找
    User.findOne({user:user},function(err,doc){
        if(doc){
            return res.json({code:1,msg:'用户名重复'})
        }
        const userModel = new User({user,type,pwd:md5Pwd(pwd)})
        userModel.save(function(e,d){
            if(e){
                return res.json({code: 1,msg:'后台出错请稍后再试'})
            }
            const {user,type,_id} = d
            res.cookie('userid',_id)
            return res.json({code:0,data:{user,type,_id}})
        })
    })
})
//挂载操作，将这里的get挂载到server里的/user目录下,此页有很多挂载操作
Router.get('/info',function(req,res){
    //返回用户有没有cookie
    const {userid} = req.cookies
    if(!userid){
        return res.json({code:1})//如果没有cookie，则返回登录页面
    }
    User.findOne({_id:userid}, _filter, function(err,doc){
        if(err){
            return res.json({code:1,msg:'服务器出错请稍后再试'})
        }
        if(doc){
            return res.json({code:0,data:doc})
        }
    })
})
//此函数的作用是给md5密码加密时加盐，增加密码用md5加密后的复杂度，使得无论什么密码都无法通过反映射被获取
function md5Pwd(pwd){
    const salt = '#include<bits/stdc++.h>'
    return utils.md5(utils.md5(pwd+salt))//此处可以多层md5嵌套加密
}
module.exports = Router