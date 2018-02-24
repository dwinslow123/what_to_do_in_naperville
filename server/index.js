require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const yelp = require('./yelp');

app.use(cors());
app.use(bodyParser.json());

app.post('/api/yelp', yelp.getBusinesses);
app.post('/api/yelp/business/:id', yelp.businessDetails);

const PORT = 3030;
app.listen(PORT, console.log(`Server is listening on port ${PORT}`));