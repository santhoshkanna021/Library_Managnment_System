import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
       type : String,
       require : true
    },

    email : {
        type : String,
        require : true
    },

    password : {
        type: String,
        require: true
    },
    otp:String,
    otpExpiry : Date,
    isVerified : {
        tyoe : Boolean,
        dafault : false,  
    },

    department : String,
    semester : String,
    stream : String,
    year : String,
    rollNo : String,
    isProfilecompleted : {
        type : Boolean,
        default : true
    },

    studentID : {
        type : String,
        unique : true,
        sparse : true
    },

    role : {
        type : String,
        enum : ["user", "admin"],
        default : "true"
    },
},
    {
         timestamps: true
    }

);


export default mongoose.model("User", userSchema);