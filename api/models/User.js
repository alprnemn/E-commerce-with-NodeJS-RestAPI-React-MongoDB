const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const userSchema = mongoose.Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    isAdmin: {
        type : Boolean,
        required : true,
        default : false
    },
    phone : {
        type : String,
        required : false
    },
    adress : {
        type : String,
        required : false
    },
    city : {
        type : String,
        required : false
    },
    town : {
        type : String,
        required : false
    }

},{
    timestamps : false
});

userSchema.methods.createAuthToken = function(){

    const decodedToken = jwt.sign({
        _id : this._id,
        firstname:this.firstname,
        lastname : this.lastname,
        username : this.username,
        email : this.email,
        isAdmin : this.isAdmin,
        phone : this.phone,
        adress : this.adress,
        city : this.city,
        town : this.town
    },process.env.JWT_SECRET_KEY,{expiresIn : "1d"});

    return decodedToken

};


const User = mongoose.model("User",userSchema);

module.exports = User;