import React, { useEffect, useState } from "react";
import axios from "axios";
import Testpaymentpage from "../Testpaymentpage";
import Navbar from "../navbar/Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";

function RoomrecommendPage() {
  const [data, setdata] = useState(null);
  const [recdata, setrecdata] = useState(null);
  let arrofcards = [];

  useEffect(() => {
    if (!recdata) {
      async function fetchuserdetails() {
        const token = localStorage.getItem("token");
        console.log(token);
        const url = "http://localhost:8080/api/user/";
        const res = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(res);
        const url1 = `http://localhost:5000/hostel?usn=${res.data.data.usn}`;
        const suggestions = await axios.get(url1);
        console.log(suggestions.data);

        const url2 = "http://localhost:8080/api/room/";
        const roomsdata = await axios.get(url2);
        console.log(roomsdata);

        let arrofrooms = [];
        for (let i = 0; i < suggestions.data.length; i++) {
          for (let j = 0; j < roomsdata.data.data.length; j++) {
            if (
              roomsdata.data.data[j].studentsUSN.find(
                (usn) => usn === suggestions.data[i].toLowerCase()
              )
            ) {
              arrofrooms.push(roomsdata.data.data[j]);
            }
          }
        }
        console.log(arrofrooms);
        let arrofsuggestedcards = [];
        for (let i = 0; i < arrofrooms.length; i++) {
          arrofsuggestedcards.push(
            <Grid item key={i} xs={4}>
              <Testpaymentpage room={arrofrooms[i]} usn={res.data.data.usn} />
            </Grid>
          );
        }

        setrecdata(arrofsuggestedcards);
      }
      fetchuserdetails();
    }
  });

  const createroomslayout = async (e) => {
    e.preventDefault();
    const url = "http://localhost:8080/api/room/";
    const roomsdata = await axios.get(url);
    const token = localStorage.getItem("token");
    console.log(token);
    const url1 = "http://localhost:8080/api/user/";
    const res = await axios.get(url1, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res);
    for (let i = 0; i < roomsdata.data.data.length; i++) {
      arrofcards.push(
        <Grid item key={i} xs={4}>
          <Testpaymentpage
            room={roomsdata.data.data[i]}
            usn={res.data.data.usn}
          />
        </Grid>
      );
    }
    setdata(arrofcards);
  };
  return (
    <>
      <Navbar />
      <Box justifyContent="center">
        <Box
          sx={{
            width: "100%",
            minHeight: "250px",
            border: "1px solid green",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
          }}
        >
          <Paper elevation={3} sx={{ backgroundColor: "green" }} square>
            <Typography variant="h5" sx={{ marginLeft: "30px" }}>
              Suggested Rooms For You
            </Typography>
          </Paper>
          {!recdata && (
            <Typography
              variant="h1"
              sx={{ marginLeft: "30px", marginTop: "30px" }}
            >
              No Suggestion Found
            </Typography>
          )}
          <Grid container spacing={2}>
            {recdata}
          </Grid>
        </Box>
        <Box justifyContent = "center">
        <Grid container spacing={4} justifyContent="center" alignItems = "center">
          <Grid item xs={12}>
            <Button
              onClick={createroomslayout}
              color="primary"
              variant="contained"
              sx={{ marginTop: 1 }}
              fullWidth
            >
              Show All Rooms
            </Button>
          </Grid>
          {data}
        </Grid>
        </Box>
      </Box>
    </>
  );
}

export default RoomrecommendPage;
