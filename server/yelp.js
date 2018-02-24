require('dotenv').config();
const axios = require('axios')

const baseSearchUrl = 'https://api.yelp.com/v3/businesses/search';
const baseBusinessUrl = 'https://api.yelp.com/v3/businesses';
const config = { 
  headers: {
    'Authorization': `Bearer ${process.env.YELP_ACCESS_TOKEN}`,
    'Content-Type': 'application/json'
  } 
}

// getBusinesses makes a get request to the Yelp API and returns a list of businesses. I've hard coded that the location is Naperville IL.
const getBusinesses = (req, res) => {
  const { searchTerm } = req.body;
  const limit = 50;
  axios.get(`${baseSearchUrl}?term=${searchTerm}&location=Naperville+IL`, config)    
      .then(businesses => {
        res.status(200).send(businesses.data.businesses)
      })
      .catch(err => res.status(500).send(err));
}

const businessDetails = (req, res) => {
  const { id } = req.params;
  axios.get(`${baseBusinessUrl}/${id}`, config)
    .then(business => {
      res.status(200).send(business.data)
      console.log(business);
    })
    .catch(err => res.status(500).send(err));
}

module.exports = {
  getBusinesses,
  businessDetails
}