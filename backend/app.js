const express = require("express");

const app = express();
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/auth");
const helloroute = require("./utils/sendhello");
const surveyRoute = require("./routes/surveyRoute");
const getUserRoute = require("./routes/getUserRoute");
const getRoomRoute = require("./routes/getRooms");
const getOrderId = require("./routes/paymentroute");
const PaymentComplete = require("./routes/paymentComplete");
const { build } = require("joi");

//middleware
app.use(express.json());
app.use(cors());
app.use(express.static("./build"));

//login and signup routes
app.use("/api/signup/", userRoute);
app.use("/api/login/", authRoute);
app.use("/api/survey/", surveyRoute);
app.use("/api/user/", getUserRoute);
app.use("/api/room/", getRoomRoute);
app.use("/api/getOrderId/", getOrderId);
app.use("/api/paycom/", PaymentComplete);
//just for testingcd

// app.get('/*', function(req, res) {
//     console.log('hello world    !');
//     res.sendFile(`${__dirname}/build/index.htmlrs`, function(err) {
//       if (err) {
//         res.status(500).send(err)
//       }
//     })
//   });

//(req, res) => {
//  res.status(200).json({success:true,message:"hello worls",data:req.body});
//}

module.exports = app;
