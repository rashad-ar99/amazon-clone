/* eslint-disable no-unused-vars */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51L1OunSHskNrs7sKUoCs0nAPWqISNTTb79qhir6Qsp9t3mPLVcZA7ZkKyzP93RGYL1220zqEvibgr9VJM44i4e7x00zQjLKtWF");

// API

// API - Config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => {
  response.status(200).send("Hello World");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log(`Payment request for ${total / 100} rupees`);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/clone-35a89/us-central1/api
