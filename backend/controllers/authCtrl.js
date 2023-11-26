const Users = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authCtrl ={
    register: async(req,res)=>{
        try{
            const{fullname, username, email, password, gender} =req.body;
            console.log(newUsername);
            const newUsername = username.toLowerCase().replace(/ /g,'');
            const user_name = await Users.findOne({username:newUsername})
            if(user_name) return res.status(400).json({msg:'this username already exists'})
            const Email = await Users.findOne({email:email})
            if(Email) return res.status(400).json({msg:'this username already exists'})
            if(password.length <6) return res.status(400).json({msg:'password must be atlest 6 characters long'})
            
            const passwordHash= await bcrypt.hash(password,13);
            const newUser = new Users({
                fullname, username:newUsername, email:Email, password:passwordHash, gender

            })
            // console.log(newUser)
            const access_token = createAccessToken({id: newUser._id});
            const refresh_token = createRefreshToken({id: newUser._id});
            // console.log({access_token,refresh_token})

            res.cookie('refreshtoken',refresh_token,{
                httpOnly:true,
                path:"/api/refresh_token",
                maxAge:24*30*60*1000
            })
            
            await newUser.save();
            res.json({
                msg:"registerd sucess",
                access_token,
                user:{
                ...newUser._doc,
                    password:''
                }
            })

        }
        catch{
            res.status(500).json({msg:err.message})
        }
    },
    login: async(req,res)=>{
        try{
            const {email, password} = req.body;
            const user = await Users.findOne({email})
            .populate("friends following","-password")
            if(!user) return res.status(400).json({msg:'User doesnot exists'})

            const isMatch = await bcrypt.compare(password,user.password);
            if(!isMatch) return res.status(400).json({msg:'User password is incorrect'})


            const access_token = createAccessToken({id: user._id});
            const refresh_token = createRefreshToken({id: user._id});
            // console.log({access_token,refresh_token})

            res.cookie('refreshtoken',refresh_token,{
                httpOnly:true,
                path:"/api/refresh_token",
                maxAge:24*30*60*1000
            })
            
            // await newUser.save();
            res.json({
                msg:"login sucess",
                access_token,
                user:{
                ...newUser._doc,
                    password:''
                }
            })

        }
        
        catch{
            res.status(500).json({msg:err.message})
        }
    },
    logout: async(req,res)=>{
        try{
            res.clearcookie('refreshtoken',{path:"/api/refresh_token"})
            res.json({msg:"Logged out"})


        }
        catch{
            res.status(500).json({msg:err.message})
        }
    },
    generateAccessToken: async(req,res)=>{
        try{
            const rt_token = req.cookies.refreshtoken;
            if(!rf_token) return res.status(400).json({msg:"please login now"})

            jwt.verify(rf_token, process.env.REFRESHTOKENSECRET, async(err,result)=>{
                if(err)return res.status(400).json({msg:"Please login now"})
                const user = await Users.findById(result.id).select("-password")
                .populate("friends following")

                if(!user) return res.status(400).json({msg:"user doesnot exist"})

                const access_token=createAccessToken({id:result.id});
                res.json({
                    access_token,
                    user
                })
            })

        }
        catch{
            res.status(500).json({msg:err.message})
        }
    },
}
const createAccessToken = (payload)=>{
    return jwt.sign(payload, process.env.ACCESSTOKENSECRET,{expiresIn:"id"})

}
const createRefreshToken = (payload)=>{
    return jwt.sign(payload, process.env.ACCESSTOKENSECRET,{expiresIn:"30d"})

    
}

module.exports = authCtrl