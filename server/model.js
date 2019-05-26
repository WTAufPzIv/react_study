const mongoose = require('mongoose')
const DB_URL = 'mongodb://127.0.0.1:27017/chat'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log("success!!!")
})
const models = {
    user:{
        'user':{"type":String,"require":true},
        'pwd':{"type":String,"require":true},
        'type':{"type":String,"require":true},
        'avatar':{'type':String},
        'note':{"type":String},
        //教师特有
        'teachername':{'type':String},
        'teachersex':{'type':String},
        'studentname':{'type':String},
        'studentsex':{'type':String},
        'teachertip':{'type':String},
        'studenttip':{'type':String}
    }
}
for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}
module.exports = {
    getModel:function(name){
        return mongoose.model(name)
    }
}