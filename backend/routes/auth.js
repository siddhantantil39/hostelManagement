const router = require('express').Router();
const { User } = require('../models/userModel');
const joi = require('joi');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {
  console.log('hello login');
  try {
    const { error } = validate(req.body);
    if (error) {
      console.log(error);
      return res
        .status(400)
        .json({ status: 'fail;', message: error.details[0].message });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      console.log('User not found');
      return res
        .status(401)
        .json({ status: 'fail;', message: 'Invalid email or password' });
    }

    const validatepassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log(validatepassword);

    if (!validatepassword) {
      con;
      return res
        .status(401)
        .json({ status: 'fail', message: 'Invalid password or email' });
    }
    const token = user.generateAuthToken();
    console.log(token);
    res
      .status(200)
      .json({
        status: 'success',
        message: 'Logged in successfully',
        data: token,
        uid: user._id,
      });
  } catch (err) {
    console.log('err');
    res.status(500).json({ status: 'fail', message: err.message });
  }
});

const validate = (data) => {
  const schema = joi.object({
    email: joi.string().email().required().label('Email'),
    password: joi.string().required().label('Password'),
  });
  return schema.validate(data);
};

module.exports = router;
