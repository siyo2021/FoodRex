const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const { BigQuery } = require("@google-cloud/bigquery");

const options = {
	keyFilename: "service-account.json",
	projectId: "htn-foodrex",
};

const bigQueryClient = new BigQuery(options);

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || "8000";

// Return a random list of items
app.get("/items", async (req, res) => {
	const query = `SELECT DISTINCT menu.id as menu_item_id, specification as menu_item_specification, categories, link, meta_data as restaurant_info FROM \`htn-foodrex.test.restaurants\` as res 
  INNER JOIN (
      SELECT DISTINCT id, restaurant_id, specification, cat.categories, link FROM \`htn-foodrex.test.menu_items\` as menu
      INNER JOIN \`htn-foodrex.test.menu_item_categories\` as cat
      ON menu.id = cat.menu_item_id
      ORDER BY RAND()
      LIMIT 10) as menu
  ON res.id = menu.restaurant_id;`;

	const options = {
		query: query,
		// Location must match that of the dataset(s) referenced in the query.
		location: "US",
	};

	// Run the query as a job
	const [job] = await bigQueryClient.createQueryJob(options);

	// Wait for the query to finish
	const [rows] = await job.getQueryResults();
	res.status(200).json(rows);
});

// Return recommendations for a user
app.get("/recommendations/:userId", async (req, res) => {
	const {
		params: { userId },
	} = req;
	if (userId === undefined) {
		res.status(400).send("MISSING userId");
		return;
	}
	const query =
		"SELECT link, specification, food.id, res.meta_data, res.id as restaurant_id FROM `htn-foodrex.test.menu_items` as food INNER JOIN `htn-foodrex.test.restaurants` as res ON res.id = food.restaurant_id INNER JOIN (SELECT DISTINCT menu_item_id FROM `htn-foodrex.test.menu_item_categories` as cats INNER JOIN `htn-foodrex.test.popular` AS pop ON cats.categories = pop.preference) as recs ON food.id = recs.menu_item_id;";
	// use big query ml to get recommendations
	const options = {
		query: query,
		// Location must match that of the dataset(s) referenced in the query.
		location: "US",
	};

	// Run the query as a job
	const [job] = await bigQueryClient.createQueryJob(options);

	// Wait for the query to finish
	const [rows] = await job.getQueryResults();

	const output = [];
	for (let curr of rows) {
		const spec = JSON.parse(curr.specification);
		const meta_data = JSON.parse(curr.meta_data);
		output.push({
			pic: curr.link,
			title: spec.name,
			restaurant: meta_data.name,
			restaurant_site: meta_data.website,
			location: meta_data.address.street,
			price: `$${spec.price}`,
		});
	}
	res.status(200).json(output);
});

// update a users preferences
app.post("/updateUser", (req, res) => {
	const {
		body: { userId },
	} = req;
	if (userId === undefined) {
		res.status(400).send("MISSING userId");
		return;
	}
	res.sendStatus(200);
});

app.get("/", (req, res) => {
	res.status(200).send("TEST");
});

app.listen(port, () => {
	console.log(`Listening to requests on http://localhost:${port}`);
});
