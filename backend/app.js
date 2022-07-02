const express = require('express');

const app = express();
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/auth');
const helloroute = require('./utils/sendhello');
const surveyRoute = require('./routes/surveyRoute');
const getUserRoute = require('./routes/getUserRoute');
const getRoomRoute = require('./routes/getRooms');

//middleware
app.use(express.json());
app.use(cors());
//login and signup routes
app.use("/api/signup/",userRoute);
app.use("/api/login/",authRoute);
app.use("/api/survey/",surveyRoute);
app.use("/api/user/",getUserRoute);
app.use("/api/room/",getRoomRoute);

//just for testing
app.use('/api',helloroute );

//(req, res) => {
  //  res.status(200).json({success:true,message:"hello worls",data:req.body});
//}

module.exports = app;
