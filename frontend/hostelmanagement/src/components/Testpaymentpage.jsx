import React from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import "./roomcss.css";
import PaymentPage from "./PaymentPage";

function Testpaymentpage(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          width: "100%",
        },
      }}
    >
      <Paper elevation={6}>
        <Paper
          sx={{ backgroundColor: "#5BB318", padding: 2 }}
          square={true}
          elevation={3}
        >
          <Stack spacing={8} direction="row" ml={4}>
            <Typography variant="h6"> Room No: </Typography>
            <Typography variant="h6"> {props.room.roomNo} </Typography>
          </Stack>
        </Paper>
        <Stack spacing={4} direction="row" ml={4} mt={2}>
          <Typography variant="body1">
            {" "}
            Floor No:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Typography>
          <Typography variant="body1"> {props.room.floorNo} </Typography>
        </Stack>
        <Stack spacing={4} direction="row" ml={4} mt={2}>
          <Typography variant="body1">
            {" "}
            Room Type:&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          </Typography>
          <Typography variant="body1"> {props.room.roomType} </Typography>
        </Stack>

        <Stack spacing={4} direction="row" ml={4} mt={2}>
          <Typography variant="body1">
            {" "}
            Block Name:&nbsp;&nbsp;&nbsp;{" "}
          </Typography>
          <Typography variant="body1"> {props.room.blockName} </Typography>
        </Stack>
          <Stack spacing={4} direction="row" ml={4} mt={2}>
            <Typography variant="body1"> Student USN1: </Typography>
            <Typography variant="body1">
              {" "}
              {props.room.studentsUSN.length >= 1 ? props.room.studentsUSN[0]:"Empty"}{" "}
            </Typography>
          </Stack>
          <Stack spacing={4} direction="row" ml={4} mt={2}>
            <Typography variant="body1"> Student USN2: </Typography>
            <Typography variant="body1">
              {" "}
              {props.room.studentsUSN.length >= 2 ? props.room.studentsUSN[1]:"Empty"}{" "}
            </Typography>
          </Stack>
        <Stack spacing={4} direction="row">
          <PaymentPage
            usn={props.usn}
            roomid={props.room._id}
            isdisable={props.room.studentsUSN.length > 1}
          />
        </Stack>
      </Paper>
    </Box>
  );
}

export default Testpaymentpage;

{
  /* <Paper elevation={3} sx={{ width: "25%", height: "25%" }}>
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
    </Paper> */
}
