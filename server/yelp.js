require('dotenv').config();
const axios = require('axios')

const baseSearchUrl = 'https://api.yelp.com/v3/businesses/search'
const baseBusinessUrl = ''
const config = { 
  headers: {
    'Authorization': `Bearer ${process.env.YELP_ACCESS_TOKEN}`
  } 
}

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
  const { id } = req.body;
  const business = req.body;
  axios.get(``)
}

module.exports = {
  getBusinesses,
}