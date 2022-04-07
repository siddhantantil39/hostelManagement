const express = require('express');
const { User, validate } = require('../models/userModel');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.route('/').post(async (req, res) => {
    console.log(req.body);
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(200).json({
      status: 'success',
      message: 'user Created successfully',
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
