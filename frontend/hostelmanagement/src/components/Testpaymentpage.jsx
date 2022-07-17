import React from 'react'
import './roomcss.css'
import PaymentPage from "./PaymentPage";

function Testpaymentpage(props) {
  const roomdetails = {
    _id : "12345678",
    roomNo:101,
    roomType:2,
    studentsUSN : ["1si18cs083","1si18cs092"],
    blockName: "ALP-Block",
    floorNo : 1
  }
  return (
    <div className="roomcard">
      <div className='roomcardview'> Room No : {props.room.roomNo}</div>
      <div className='roomcardview'> Room id : {props.room._id}</div>
      <div className='roomcardview'> Room Type : {props.room.roomType}</div>
      <div className='roomcardview'> StudentUSN1 : {props.room.studentsUSN[0]}</div>
        {props.room.studentsUSN.length === 2 && <div className='roomcardview'> StudentUSN2 : {props.room.studentsUSN[1]}</div>}
      <div className='roomcardview'> Block Name : {props.room.blockName}</div>
      <div className='roomcardview'> Floor No : {props.room.floorNo}</div>
        <div className="roomcardview">
            <PaymentPage usn = {props.usn} roomid = {props.room._id} isdisable = {props.room.studentsUSN.length > 1}/>
        </div>

    </div>
  )
}

export default Testpaymentpage