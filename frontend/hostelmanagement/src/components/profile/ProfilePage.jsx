import React, { useState, useEffect } from "react";
import axios from "axios";
import Testpaymentpage from "../Testpaymentpage";
import Navbar from "../navbar/Navbar";
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
      <div className="profilecard">
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
      </div>
    </div>
  );
}

export default ProfilePage;

// branch: "CSE"
// email: "PUNIT@gmail.com"
// firstName: "A S"
// lastName: "PUNITH"
// roomid: "62c327ec0efbe1895dedf275"
// transactionid: "pay_JpvLZXNCR4DxBN"
// usn: "1SI18CS001"
// year: 4
