import React from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "./roomcss.css";
import PaymentPage from "./PaymentPage";

function Testpaymentpage(props) {
  const roomdetails = {
    _id: "12345678",
    roomNo: 101,
    roomType: 2,
    studentsUSN: ["1si18cs083", "1si18cs092"],
    blockName: "ALP-Block",
    floorNo: 1,
  };
  return (
    <Paper elevation={3} sx={{ width: "25%", height: "25%" }}>
      <Box sx = {{ width: "100%", height: "15%",justifyContent: 'flex-start' ,alignItems: 'flex-start' }}>
      <Typography variant="body2" component="span"> Room No </Typography><Typography variant="body2" component="span">{props.room.roomNo}</Typography>
      </Box>
      <Box sx = {{ width: "100%", height: "15%",justifyContent: 'flex-start' ,alignItems: 'flex-start' }}>
      <Typography variant="body2" component="span"> Room id </Typography><Typography variant="body2" component="span">{props.room._id}</Typography>
      </Box>
      <div className="roomcardview"> Room Type : {props.room.roomType}</div>
      <div className="roomcardview">
        {" "}
        StudentUSN1 : {props.room.studentsUSN[0]}
      </div>
      {props.room.studentsUSN.length === 2 && (
        <div className="roomcardview">
          {" "}
          StudentUSN2 : {props.room.studentsUSN[1]}
        </div>
      )}
      <div className="roomcardview"> Block Name : {props.room.blockName}</div>
      <div className="roomcardview"> Floor No : {props.room.floorNo}</div>
      <div className="roomcardview">
        <PaymentPage
          usn={props.usn}
          roomid={props.room._id}
          isdisable={props.room.studentsUSN.length > 1}
        />
      </div>
    </Paper>
  );
}

export default Testpaymentpage;
