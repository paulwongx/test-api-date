// importing
const express = require('express');
const cors = require('cors');
const fs = require('fs');

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(cors());
app.use(express.json());

// api routes
app.get('/', (req, res) => {
	const json = fs.readFileSync('./date.json');
    latestDate = JSON.parse(json);
	res.status(200).send(latestDate);
});

// listener
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
