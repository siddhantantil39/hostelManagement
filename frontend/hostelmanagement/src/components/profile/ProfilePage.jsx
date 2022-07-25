import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Testpaymentpage from "../Testpaymentpage";
import Navbar from "../navbar/Navbar";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';
function ProfilePage() {
  const [profiledata, steprofiledata] = useState(null);
  const [roomdata, steroomdata] = useState(null);
  useEffect(() => {
    if (!profiledata && !roomdata) {
      async function getdatas() {
        const token = localStorage.getItem("token");
        console.log(token);
        let res;
        if (token && token.length > 10) {
          const url1 = "http://localhost:8080/api/user/";
          res = await axios.get(url1, {
            headers: { Authorization: `Bearer ${token}` },
          });
          steprofiledata(res.data.data);
          console.log(res);
        }
        if (res.data.data.roomid) {
          console.log(res.data.data.roomid);
          const url = `http://localhost:8080/api/room/${res.data.data.roomid}/`;
          const roomsdata = await axios.get(url);
          console.log(roomsdata);
          steroomdata(roomsdata.data.data);
        }
      }
      getdatas();
    }
  });
  const logoutuser = (e) => {
    e.preventDefault();
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("uid");
    window.location.replace("http://localhost:3000/signup");
  };

  return (
    <div>
      <Navbar />
      <Box xs = {{mt:-2}}>
        <Box
          sx={{
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Paper elevation={1} sx = {{minHeight:"100px",width:"100%", backgroundColor:"rgba(73, 63, 252, 1)"}}></Paper>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "15%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "pink",
            mt: -2,
          }}
        >
          <Stack
            spacing={4}
            direction="row"
            ml={4}
            mt={2}
            justifyContent="space-evenly"
          >
            <Typography variant="h3">Profile Details</Typography>
            <
            <Typography variant="h3">Room Details</Typography>
          </Stack>
        </Box>
        <Stack spacing={4} direction="row">
          <Box
            sx={{
              width: "50%",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Paper elevation={6}>
              <Paper
                sx={{ backgroundColor: "#5BB318", padding: 2 }}
                square={true}
                elevation={3}
              >
                <Stack spacing={8} direction="row" ml={4}>
                  <Typography variant="h6"> Name </Typography>
                  <Typography variant="h6">
                    {" "}
                    {profiledata
                      ? profiledata.firstName + profiledata.lastName
                      : ""}{" "}
                  </Typography>
                </Stack>
              </Paper>
              <Stack spacing={4} direction="row" ml={4} mt={2}>
                <Typography variant="body1">
                  {" "}
                  Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Typography>
                <Typography variant="body1">
                  {" "}
                  {profiledata ? profiledata.email : ""}{" "}
                </Typography>
              </Stack>
              <Stack spacing={4} direction="row" ml={4} mt={2}>
                <Typography variant="body1">
                  {" "}
                  USN:&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </Typography>
                <Typography variant="body1">
                  {" "}
                  {profiledata ? profiledata.usn : ""}{" "}
                </Typography>
              </Stack>

              <Stack spacing={4} direction="row" ml={4} mt={2}>
                <Typography variant="body1">
                  {" "}
                  Branch:&nbsp;&nbsp;&nbsp;{" "}
                </Typography>
                <Typography variant="body1">
                  {" "}
                  {profiledata ? profiledata.branch : ""}{" "}
                </Typography>
              </Stack>
              <Stack spacing={4} direction="row" ml={4} mt={2}>
                <Typography variant="body1"> Year: </Typography>
                <Typography variant="body1">
                  {" "}
                  {profiledata ? profiledata.year : ""}{" "}
                </Typography>
              </Stack>
              <Stack spacing={4} direction="row" ml={4} mt={2}>
                <Typography variant="body1"> Transaction ID: </Typography>
                <Typography variant="body1">
                  {" "}
                  {profiledata ? profiledata.transactionid : ""}{" "}
                </Typography>
              </Stack>
              <Stack spacing={4} direction="row" ml={4} mt={2}>
                <Typography variant="body1"> Amount Paid: </Typography>
                <Typography variant="body1">Rs.1</Typography>
              </Stack>
            </Paper>
          </Box>
          <Box
            sx={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {roomdata && (
              <Testpaymentpage
                room={roomdata}
                usn={profiledata.usn}
                width="100%"
              />
            )}
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

export default ProfilePage;

{
  /* <div className="profilecard">
<div className="roomcardview">
  First Name :: {profiledata ? profiledata.firstName : ""}{" "}
  <button className="logout" onClick={logoutuser}>
    Logout
  </button>
</div>
<div className="roomcardview">
  Last Name :: {profiledata ? profiledata.lastName : ""}
</div>
<div className="roomcardview">
  Email :: {profiledata ? profiledata.email : ""}
</div>
<div className="roomcardview">
  USN :: {profiledata ? profiledata.usn : ""}
</div>
<div className="roomcardview">
  Branch :: {profiledata ? profiledata.branch : ""}
</div>
<div className="roomcardview">
  Year :: {profiledata ? profiledata.year : ""}
</div>
<div className="roomcardview">
  Transaction Id :: {profiledata ? profiledata.transactionid : ""}
</div>
<div className="roomcardview">Amount Paid :: Rs.1.00</div>
<div className="roomcardview">
  Registered Room Details
  <div>
    {roomdata && (
      <Testpaymentpage room={roomdata} usn={profiledata.usn} />
    )}
  </div>
</div>
</div> */
}

// branch: "CSE"
// email: "PUNIT@gmail.com"
// firstName: "A S"
// lastName: "PUNITH"
// roomid: "62c327ec0efbe1895dedf275"
// transactionid: "pay_JpvLZXNCR4DxBN"
// usn: "1SI18CS001"
// year: 4
