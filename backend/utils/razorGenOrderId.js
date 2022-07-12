const Razorpay = require('razorpay');

var instance = new Razorpay({
  key_id: 'rzp_test_8gcTUIpR3vhFj8',
  key_secret: 'X4EJTMWlcPMEhDiYWRZAtlr2',
});

const getorderId = async () => {
  console.log('hello vai1');
  var orderid = { hello: 1 };
  try {
    orderid = await instance.orders.create({
        "amount": 100,
        "currency": "INR",
        "receipt": "receipt#1",
        "notes": {
          "key1": "value3",
          "key2": "value2"}
    });
  } catch (e) {
    console.error(e);
  }

  console.log('hello vai');

  return orderid;
};

module.exports = getorderId;
