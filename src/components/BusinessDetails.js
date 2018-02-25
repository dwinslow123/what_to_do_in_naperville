import React, { Component } from 'react';
import axios from 'axios';
import Photobox from './Photobox';
import '../css/styles.css';

class BusinessDetails extends Component {
  state = {
    name: '',
    price: '',
    rating: '',
    review_count: '',
    phone: '',
    photos: [],
    location: [],
  }

  componentDidMount() {
    this.getDetails();
  }

// getDetails makes a POST request to our local server and sets the state using those results.
  getDetails = (e) => {
    const { id } = this.props.match.params; // this grabs the ID off of the URL.
    axios.post(`http://localhost:3030/api/yelp/business/${id}`, { ...this.state })
      .then(result => {
        this.setState({
          name: result.data.name,
          price: result.data.price,
          rating: result.data.rating,
          review_count: result.data.review_count,
          phone: result.data.phone,
          photos: result.data.photos,
          location: result.data.location.display_address
        })
      })
  }

  render() {
    
    const location = this.state.location.map((line, i) => <p key={ i }>{ line }</p>) ;

    const photos = this.state.photos.map(photo => `${photo}`)

    return (
      <div className="business-details">
        <p>{ this.state.name }</p>
        <Photobox photos={ photos } />
        <p>{ this.state.price }</p>
        <p>{ this.state.rating }</p>
        <p>{ this.state.review_count }</p>
        <p>{ this.state.phone }</p>
        <div className="address-block">
          { location }
        </div>
      </div>
    )
  }
}

export default BusinessDetails;