const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        typr:String,
        trim:true,
        unique:true,
        maxlength:25,
        // required:true,
        require:true,
    },
    fullname:{
        type:String,
        trim:true,
        maxlength:25,
        require:true,

    },
    email:{
        type:String,
        trim:true,
        require:true,

    },
    password:{
        type:String,
        require:true,
    },
    address:{
        type:String,
        default:','
    },
    gender:{
        type:String,
        default:'',
    },
    website:{
        type:String,
        default:'',
    },
    phone:{
        type:String,
        default:'',
    },
    avatar:{
        type:String,
        default:"",
    },
    story:{
        type:String,
        default:'',
        maxlength:200,

    },
    friends:[{type:mongoose.Types.ObjectId,ref:'user'}],
    following:[{type:mongoose.Types.ObjectId,ref:'user'}],

    
        timestamps:true
    
})
module.exports = mongoes.model('user',userSchema)