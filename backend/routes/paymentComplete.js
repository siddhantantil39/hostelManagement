const express = require('express');
const Room = require('../models/roomModel');
const {User} = require('../models/userModel');

const router = express.Router();

router.route('/').post(async (req,res) =>{
    console.log(req.body);
    const uid = req.body.uid;
    await  User.findByIdAndUpdate(uid,{transactionid : req.body.transactionid,roomid:req.body.roomid});
    Room.findById(req.body.roomid).then((doc) => {
        console.log(doc);
        doc.studentsUSN.push(req.body.usn);
        doc.save();
    });

    res.status(200).json({status:"success"});
});

module.exports = router;