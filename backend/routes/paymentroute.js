const express = require('express');

const genOrderid = require('../utils/razorGenOrderId')

const router = express.Router();

router.route('/').get(async (req, res) => {
    console.log("hello1");
      const orderid = await genOrderid();
      console.log(orderid);
      res.status(200).json(orderid);
});

module.exports = router;