const mongoose = require('mongoose');


const roomSchema = new mongoose.Schema({
    roomNo:{
        type: 'number',
        required: [true,"roomNo is required"],
        unique :true
    },
    roomType:{
        type: 'number',
        required: [true,"roomType is required"]
    },
    floorNo: {
        type: 'number',
        required: [true,"floorNo is required"]
    },

    studentsUSN: [String],

    blockName: {
        type: 'string',
        required: [true,"blockName is required"]
    }
});

const Room = mongoose.model('room',roomSchema);

module.exports = Room;