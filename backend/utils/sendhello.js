const express = require('express');


const router = express.Router();

router.route('/').post((req, res) => {
     console.log(req.body);
     res.status(200).json({
         status: 'success',
         message: 'its working',
         data: req.body
     });
});

module.exports = router;