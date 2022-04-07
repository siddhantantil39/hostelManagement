const express = require('express');
const app = express();
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/auth');
const helloroute = require('./utils/sendhello');

//middleware
app.use(express.json());
app.use(cors());
//login and signup routes
app.use("/api/signup/",userRoute);
app.use("/api/login/",authRoute);

//just for testing
app.use('/api',helloroute );

//(req, res) => {
  //  res.status(200).json({success:true,message:"hello worls",data:req.body});
//}

module.exports = app;
