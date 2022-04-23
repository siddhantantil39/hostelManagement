const express = require('express');
const Survey = require('../models/serveymodel');

const router = express.Router();

router.route('/').post(async (req, res) => {
  console.log(Survey);

  const surveydata = await Survey.create(req.body);
  res.status(200).json({
    status: 'success',
    data: {
      surveydata,
    },
  });
});

module.exports = router;
