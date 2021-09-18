const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const { BigQuery } = require('@google-cloud/bigquery');

const bigQueryClient = new BigQuery();

const app = express();
const port = process.env.PORT || "8000";

app.get("/", (req, res) => {
  
  res.status(200).send("TEST");
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});