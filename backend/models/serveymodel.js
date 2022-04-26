const mongoose = require('mongoose');


const serveySchema = new mongoose.Schema({
    usn:{
        type: 'string',
        required: [true,"Usn is required"],
        unique :true
    },
    state:{
        type: 'string',
        required: [true,"State is required"]
    },
    branch: {
        type: 'string',
        required: [true,"Branch is required"]
    },
    year: {
        type: 'string',
        required: [true,"Year is required"]
    },
    nature: {
        type: 'string',
        required: [true,"Nature is required"]
    },
    sleepEarly: {
        type: 'string',
        required: [true,"Sleep is required"]
    },
    sportslike: {
        type: 'string',
        required: [true,"Sports is required"]
    },
    study: {
        type: 'string',
        required: [true,"Study is required"]
    },
    birthdate:{
        type : Date,
        required: [true,"Birthdate is required"]
    },
    name:{
        type: 'string',
        required: [true,"Name is required"]
    },
    singing: {
        type: 'string',
        required: [true,"Singing is required"]
    },
    movies: {
        type: 'string',
        required: [true,"Movie is required"]
    }


});

const Survey = mongoose.model('survey',serveySchema);

module.exports = Survey;