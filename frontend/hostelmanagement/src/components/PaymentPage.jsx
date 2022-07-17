import React from "react";
import axios from "axios";
import { useEffect } from "react";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

function PaymentPage(props) {
  console.log(props);
  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  const initiatepay = async (e) => {
    console.log("hello");
    e.preventDefault();
    const url = "http://localhost:8080/api/getOrderId/";
    const paymentinfo = await axios.get(url);
    console.log(paymentinfo);

    const options = {
      key: "rzp_test_8gcTUIpR3vhFj8",
      currency: paymentinfo.data.currency,
      amount: paymentinfo.data.amount,
      name: "Learning To Code Online",
      description: "Test Wallet Transaction",
      image: "http://localhost:1337/logo.png",
      order_id: paymentinfo.data.id,
      handler: async function (response) {
        console.log(response);
        const uid = localStorage.getItem("uid");
        const url = "http://localhost:8080/api/paycom/";
        const data = {
          uid:uid,
          usn:props.usn,
          transactionid : response.razorpay_payment_id,
          roomid : props.roomid
        }
        await axios.post(url,data);
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        Window.location.href='/profile';
      },
      prefill: {
        name: "Anirudh Jwala",
        email: "anirudh@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
      <button id="rzp-button1" onClick={initiatepay} className='btn-book' disabled={props.isdisable}>Pay</button>
  );
}

export default PaymentPage;

// const loadScript = (src) => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.onload = () => {
//         resolve(true);
//       };
//       script.onerror = () => {
//         resolve(false);
//       };
//      document.body.appendChild(script);
//    });
// };

// useEffect(() => {
//     loadScript("https://checkout.razorpay.com/v1/checkout.js");
// });
// const initiatepay = (e) => {
// var rzp1 = new window.Razorpay(options);
// rzp1.on("payment.failed", function (response) {
//   alert(response.error.code);
//   alert(response.error.description);
//   alert(response.error.source);
//   alert(response.error.step);
//   alert(response.error.reason);
//   alert(response.error.metadata.order_id);
//   alert(response.error.metadata.payment_id);
// });
// };
// const url = "http://localhost:8080/api/getOrderId/";
// const paymentinfo = await axios.get(url);
// var options = {
// key: "rzp_test_8gcTUIpR3vhFj8", // Enter the Key ID generated from the Dashboard
// amount: "100", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
// currency: "INR",
// name: "Acme Corp",
// description: "Test Transaction",
// image: "https://example.com/your_logo",
// order_id: paymentinfo.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
// handler: function (response) {
//   alert(response.razorpay_payment_id);
//   alert(response.razorpay_order_id);
//   alert(response.razorpay_signature);
// },
// prefill: {
//   name: "Gaurav Kumar",
//   email: "gaurav.kumar@example.com",
//   contact: "9999999999",
// },
// notes: {
//   address: "Razorpay Corporate Office",
// },
// theme: {
//   color: "#3399cc",
// },
// };
