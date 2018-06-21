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
  const limit = 25;
  axios.get(`${baseSearchUrl}?term=${searchTerm}&location=Naperville+IL&radius=8047`, config)    
      .then(businesses => {
        res.status(200).json(businesses.data.businesses)
      },
      (err) => {
        res.status(500).json(err)
      }
    )
}

//businessDetails makes a get request to the Yelp API and returns the business data. 
const businessDetails = (req, res) => {
  const { id } = req.params;
  axios.get(`${baseBusinessUrl}/${id}`, config)
    .then(business => {
      res.status(200).json(business.data)
    })
}

module.exports = {
  getBusinesses,
  businessDetails
}