const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const { BigQuery } = require('@google-cloud/bigquery');

const options = {
  keyFilename: 'service-account.json',
  projectId: 'htn-foodrex'
}

const bigQueryClient = new BigQuery(options);

const app = express();
app.use(bodyParser.json())
const port = process.env.PORT || "8000";

// Return a random list of items
app.get("/items", async (req, res) => {

  const query = `SELECT meta_data as restaurant_info, menu.id as menu_item_id, specification as menu_item_specification, categories FROM \`htn-foodrex.test.restaurants\` as res 
  INNER JOIN (
      SELECT id, restaurant_id, specification, cat.categories FROM \`htn-foodrex.test.menu_items\` as menu
      INNER JOIN \`htn-foodrex.test.menu_item_categories\` as cat
      ON menu.id = cat.menu_item_id
      ORDER BY RAND()
      LIMIT 10) as menu
  ON res.id = menu.restaurant_id;`

  const options = {
    query: query,
    // Location must match that of the dataset(s) referenced in the query.
    location: 'US',
  };

  // Run the query as a job
  const [job] = await bigQueryClient.createQueryJob(options);

  // Wait for the query to finish
  const [rows] = await job.getQueryResults();
  res.status(200).json(rows);
})

// Return recommendations for a user
app.get("/recommendations/:userId", (req, res) => {
  const { params: { userId }} = req;
  if (userId === undefined) {
    res.status(400).send("MISSING userId");
    return ;
  }
  // use big query ml to get recommendations
  res.sendStatus(200);
})

// update a users preferences
app.post("/updateUser", (req, res) => {
  const { body: { userId } } = req;
  if (userId === undefined) {
    res.status(400).send("MISSING userId");
    return ;
  }
  res.sendStatus(200);
})

app.get("/", (req, res) => {
  
  res.status(200).send("TEST");
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});