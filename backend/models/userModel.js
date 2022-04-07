const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');
const joi = require('joi');
const joipasswordcomplexity = require('joi-password-complexity');


const userSchema = new mongoose.Schema({
    firstName: {
        type: 'string',
        required: [true, "User First Name is Required"]
    },
    lastName: {
        type: 'string',
        required: [true, "User Last Name is Required"]
    },
    usn:{
        type: 'string',
        required: [true, "User Usn is Required"],
        unique: true
    },
    branch: {
        type: 'string',
        required: [true, "User Branch is Required"],
    },
    semester: {
        type:'Number',
        required: [true,"User Semester is Required"]
    },
    email: {
        type: 'string',
        required: [true, "User Email is Required"],
        unique: true
    },
    password: {
        type: 'string',
        required: [true, "User Password is Required"]
    }
});

userSchema.methods.generateAuthToken = function(){
    const token = jsonwebtoken.sign({_id: this._id},process.env.JWTPRIVATEKEY,{expiresIn: "7d"});
    return token;
};

const User = mongoose.model("user",userSchema);

const validate = (data) => {
    const schema = joi.object({
        firstName: joi.string().required().label("First Name"),
        lastName: joi.string().required().label("Last Name"),
        usn: joi.string().required().label("USN"),
        branch: joi.string().required().label("Branch"),
        semester:joi.number().required().label("Semester"),
        email : joi.string().email().required().label("Email"),
        password:joipasswordcomplexity().required().label("Password"),
    });
    return schema.validate(data);
}

module.exports = {User, validate};
