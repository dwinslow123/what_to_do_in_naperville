import React, { Component } from 'react';
import axios from 'axios';
import Photobox from './Photobox';
import { Link } from 'react-router-dom';
import { StarRating } from './StarRating';
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

// getDetails makes a POST request to our local server with the state.
  getDetails = (e) => {
    const { id } = this.props.match.params; // this grabs the ID off of the URL.
    axios.post(`http://localhost:3030/api/yelp/business/${id}`, { ...this.state })
      .then(result => {
        this.setState({
          name: result.data.name,
          price: `Price: ${result.data.price}`,
          rating: result.data.rating,
          review_count: `Review Count: ${result.data.review_count}`,
          phone: result.data.phone,
          photos: result.data.photos,
          location: result.data.location.display_address,
        })
      })
  }

  render() {  
    const location = this.state.location.map((line, i) => <p key={ i }>{ line }</p>);
    const photos = this.state.photos.map(photo => `${photo}`);
    const phone = this.state.phone.substr(2).replace(/(\d{3})(\d{3})(\d{4})/, "Phone: ($1) $2-$3");// removes the +1 and formats the numbers

    return (
      <div className="wrapper">
        <Link to="/">
          <button type="button">Back</button>
        </Link>
        <div className="business-details">
          <div className="name">
            <p>{ this.state.name }</p>
          </div>
          <div className="address-block">
            { location }
          </div>
          <div className="photos">
            <Photobox photos={ photos } />
          </div>
          <div className="details">
              <div className="rating">
                <StarRating rating={ this.state.rating } />
                <div className="reviews">
                <p>{ this.state.review_count }</p>
              </div>
              </div>
              <div className="price">
                <p>{ this.state.price }</p>
              </div>
              <div className="phone">
                <p>
                  <a href={ `tel:${ this.state.phone }` }>{ phone }</a>
                </p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BusinessDetails;