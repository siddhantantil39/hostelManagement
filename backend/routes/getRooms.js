const express = require('express');
const Room = require('../models/roomModel');

const router = express.Router();
router.route('/').get(async (req,res) => {
       const roomdtaa = await Room.find();
       res.status(200).json({data:roomdtaa});
});

router.route('/:id').get(async (req,res) => {
       const singleroomdata = await Room.findById(req.params.id);
       res.status(200).json({data: singleroomdata});
});

module.exports = router;