import React, {useEffect, useState} from 'react'
import axios from "axios";
import Testpaymentpage from "../Testpaymentpage";
import Navbar from "../navbar/Navbar";

function RoomrecommendPage() {
   const [data,setdata] = useState(null);
   const [recdata,setrecdata] = useState(null);
   let arrofcards = [];
  const fetchuserdetails = async (e) =>{
    e.preventDefault();
    const token = localStorage.getItem('token');
    console.log(token);
    const url = "http://localhost:8080/api/user/";
    const res = await axios.get(url,{ headers: {"Authorization" : `Bearer ${token}`} });
    console.log(res);
    const url1 = `http://localhost:5000/hostel?usn=${res.data.data.usn}`;
    const suggestions = await axios.get(url1);
    console.log(suggestions.data);

      const url2 = "http://localhost:8080/api/room/";
      const roomsdata = await axios.get(url2);
      console.log(roomsdata);

      let arrofrooms = [];
      for(let i = 0; i < suggestions.data.length;i++){
          for(let j = 0; j < roomsdata.data.data.length;j++){
              if(roomsdata.data.data[j].studentsUSN.find((usn) => usn === suggestions.data[i].toLowerCase())){
                  arrofrooms.push(roomsdata.data.data[j]);
              }
          }
      }
      console.log(arrofrooms);
       let arrofsuggestedcards = [];
      for(let i =0; i < arrofrooms.length;i++){
          arrofsuggestedcards.push(<Testpaymentpage room = {arrofrooms[i]} usn = {res.data.data.usn}/>)
      }

      setrecdata(arrofsuggestedcards);


  }

  const createroomslayout = async (e) =>{
    e.preventDefault();
    const url = "http://localhost:8080/api/room/";
   const roomsdata = await axios.get(url);
   const token = localStorage.getItem('token');
   console.log(token);
   const url1 = "http://localhost:8080/api/user/";
   const res = await axios.get(url1,{ headers: {"Authorization" : `Bearer ${token}`} });
   console.log(res);
    for(let i =0; i < roomsdata.data.data.length;i++){
      arrofcards.push(<Testpaymentpage room = {roomsdata.data.data[i]} usn = {res.data.data.usn}/>)
    }
    setdata(arrofcards);
  }
  return (
      <>
      <Navbar/>
    <div className='recpage'>Room Recommend Page
    <div>
      <button onClick={fetchuserdetails} className="recbtn">Show Recommended rooms</button>
        <div>
            {recdata}
        </div>
    </div>
      <button onClick={createroomslayout} className="recbtn">open all rooms</button>
        <div>
            {data}
        </div>
    </div>
      </>
  )
}

export default RoomrecommendPage