const mongoose = require('mongoose');


const serveySchema = new mongoose.Schema({
    usn:{
        type: 'string',
        required: [true,"Usn is required"]
    },
    state:{
        type: 'string',
        required: [true,"State is required"]
    },
    branch: {
        type: 'string',
        required: [true,"Branch is required"]
    },
    nature: {
        type: 'number',
        required: [true,"Nature is required"]
    },
    sleepEarly: {
        type: 'number',
        required: [true,"Sleep is required"]
    },
    sportslike: {
        type: 'number',
        required: [true,"Sports is required"]
    },
    study: {
        type: 'number',
        required: [true,"Study is required"]
    },

});

const Survey = mongoose.model('survey',serveySchema);

module.exports = Survey;