const express = require('express');
const Room = require('../models/roomModel');

const router = express.Router();
router.route('/').get(async (req,res) => {
       const roomdtaa = await Room.find();
       res.status(200).json({data:roomdtaa});
});

module.exports = router;