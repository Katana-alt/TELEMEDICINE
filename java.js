const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Your Safaricom API credentials
const lipaNaMpesaShortcode = 'yourShortcode';
const lipaNaMpesaShortcodeKey = 'yourShortcodeKey';
const shortCodeSecret = 'yourShortcodeSecret';
const phoneNumber = 'phone_number';  // The phone number of the user making the payment
const amount = 'amount';  // Amount to be paid
const callbackUrl = 'yourCallbackURL';  // URL to receive transaction response

// Step 1: Get the access token
async function getAccessToken() {
  const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
  const auth = Buffer.from(`${lipaNaMpesaShortcodeKey}:${shortCodeSecret}`).toString('base64');
  
  try {
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Basic ${auth}`,
      }
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error generating access token', error);
  }
}

// Step 2: Make the payment request
async function makePayment() {
  const token = await getAccessToken();

  const paymentRequest = {
    "BusinessShortcode": lipaNaMpesaShortcode,
    "LipaNaMpesaShortcode": lipaNaMpesaShortcode,
    "PhoneNumber": phoneNumber,
    "Amount": amount,
    "AccountReference": "TelemedicinePayment",
    "TransactionDesc": "Telemedicine Payment Description",
    "LipaNaMpesaOnlineShortcode": lipaNaMpesaShortcode,
    "LipaNaMpesaOnlineShortcodeKey": lipaNaMpesaShortcodeKey,
    "TransactionType": "Payment"
  };

  const url = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
  
  try {
    const response = await axios.post(url, paymentRequest, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });
    console.log('Payment request sent:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error processing payment request:', error);
  }
}

// Payment route
app.post('/make-payment', async (req, res) => {
  const paymentResult = await makePayment();
  res.json(paymentResult);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
