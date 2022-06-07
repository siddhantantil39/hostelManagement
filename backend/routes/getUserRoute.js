const { promisify } = require('util');
const express = require('express');
const { User, validate } = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');

const router = express.Router();

router.route('/').get(async (req, res) =>{
     const token = req.body.token;
     const decode = await promisify(jsonwebtoken.verify)(token, process.env.JWTPRIVATEKEY);
     console.log(token);
  console.log(decode);
  var userdata = await User.findById(decode._id);

  const userdatatoreturn = {
      'firstName' : userdata.firstName,
      'lastName' : userdata.lastName,
      'email' : userdata.email,
      'usn' : userdata.usn,
      'branch' : userdata.branch,
      'year' : userdata.year,
  };
  console.log(userdatatoreturn);
  res.status(200).json({data: userdatatoreturn});
});

module.exports = router;