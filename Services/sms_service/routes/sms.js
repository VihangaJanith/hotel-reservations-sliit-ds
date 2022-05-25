const express = require('express');
const router = express.Router();
var ShoutoutClient = require('shoutout-sdk');

//Reservation Confirmation SMS
router.post('/send', async(req, res) => {
var apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxZDA3MDgzMC1kNDEzLTExZWMtYjlkOS1lZjg3OTRmZDFkNTQiLCJzdWIiOiJTSE9VVE9VVF9BUElfVVNFUiIsImlhdCI6MTY1MjU5MzkwOSwiZXhwIjoxOTY4MjEzMTA5LCJzY29wZXMiOnsiYWN0aXZpdGllcyI6WyJyZWFkIiwid3JpdGUiXSwibWVzc2FnZXMiOlsicmVhZCIsIndyaXRlIl0sImNvbnRhY3RzIjpbInJlYWQiLCJ3cml0ZSJdfSwic29fdXNlcl9pZCI6IjY3OTg1Iiwic29fdXNlcl9yb2xlIjoidXNlciIsInNvX3Byb2ZpbGUiOiJhbGwiLCJzb191c2VyX25hbWUiOiIiLCJzb19hcGlrZXkiOiJub25lIn0.HDHTT87S3o55S7tI8G-1KpayqPpmqiftJYNTh9K1RC8';

var debug = true, verifySSL = false;

const { destinations } = req.body;

var client = new ShoutoutClient(apiKey, debug, verifySSL);


var message = {
 "content": {"sms": 
 "Welcome to Kingsbury Hotel Reservations || Your Reservation Has Been Placed Successfully !",},
 "destinations":  destinations,
 "source": "ShoutDEMO",
 "transports": ["SMS"]
};

client.sendMessage(message, (error, result) => {
 if (error) {
  console.error('Error sending message!',error);
 } else {
  console.log('Sending message successful!',result);
 }
});

});

module.exports = router;