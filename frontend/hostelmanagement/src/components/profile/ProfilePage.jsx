
import React,{useState} from 'react'
import axios from "axios";
import Testpaymentpage from "../Testpaymentpage";
import Navbar from "../navbar/Navbar";
let profiledata;
let roomdata;
function ProfilePage() {
    const [loaded,setloaded] = useState(null);
    const loadProfile = async (e) => {
        const token = localStorage.getItem('token');
        console.log(token);
        const url1 = "http://localhost:8080/api/user/";
        const res = await axios.get(url1,{ headers: {"Authorization" : `Bearer ${token}`} });
        profiledata = res.data.data
        console.log(res);
        const url = `http://localhost:8080/api/room/${res.data.data.roomid}/`;
        const roomsdata = await axios.get(url);
        console.log(roomsdata);
        roomdata = roomsdata.data.data;
        setloaded(1);
    }

    const logoutuser = (e) =>{
        e.preventDefault();
        window.localStorage.removeItem("token");
        window.location.replace('http://localhost:3000/signup')
    }

  return (
       <div>
           <Navbar/>
           <div>
         <button onClick={loadProfile} className="norm-btn">Show Profile</button>
           </div>
           {loaded && <div className="profilecard">
           <div className="roomcardview">First Name => {profiledata.firstName} <button className="logout" onClick={logoutuser}>Logout</button></div>
               <div className="roomcardview">Last Name => {profiledata.lastName}</div>
               <div className="roomcardview">Email => {profiledata.email}</div>
               <div className="roomcardview">USN => {profiledata.usn}</div>
               <div className="roomcardview">Branch => {profiledata.branch}</div>
               <div className="roomcardview">Year => {profiledata.year}</div>
               <div className="roomcardview">Transaction Id => {profiledata.transactionid}</div>
               <div className="roomcardview">Amount Paid => Rs.1.00</div>
               <div className="roomcardview">Registered Room Details
               <div>
                   <Testpaymentpage room = {roomdata} usn = {profiledata.usn}/>
               </div>
               </div>


           </div>}
       </div>
  )
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