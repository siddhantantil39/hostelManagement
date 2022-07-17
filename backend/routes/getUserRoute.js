const { promisify } = require('util');
const express = require('express');
const { User, validate } = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

const router = express.Router();

router.route('/').get(async (req, res) =>{
  console.log('inside get user routes');  
     let token;
     if(req.headers.authorization && req.headers.authorization.startsWith("Bearer ")){
         token = req.headers.authorization.split(' ')[1];
     }
     console.log(token);
     let decode;
     try {
          decode = await promisify(jsonwebtoken.verify)(token, process.env.JWTPRIVATEKEY);
     }catch (e) {
         console.log(e.message);
     }
  console.log(decode);
  var userdata = await User.findById(decode._id);

  const userdatatoreturn = {
      'firstName' : userdata.firstName,
      'lastName' : userdata.lastName,
      'email' : userdata.email,
      'usn' : userdata.usn,
      'branch' : userdata.branch,
      'year' : userdata.year,
      'roomid' : userdata.roomid,
      'transactionid' : userdata.transactionid
  };
  console.log(userdatatoreturn);
  res.status(200).json({data: userdatatoreturn});
});


router.route('/getalluser/').get(async (req, res) => {
  const data = await User.find();
  res.status(200).json({data: data});
});

module.exports = router;