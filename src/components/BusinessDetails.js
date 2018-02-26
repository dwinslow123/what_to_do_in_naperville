import React, { Component } from 'react';
import axios from 'axios';
import Photobox from './Photobox';
import { Link } from 'react-router-dom';
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
    hours: [],
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
          rating: `Rating: ${result.data.rating} / 5`,
          review_count: `Review Count: ${result.data.review_count}`,
          phone: result.data.phone,
          photos: result.data.photos,
          location: result.data.location.display_address,
          hours: result.data.hours[0].open,
        })
      })
  }

  convertDays = (day) => {
    switch (day) {
      case 0:
        return 'Monday';
      case 1:
        return 'Tuesday';
      case 2:
        return 'Wednesday';
      case 3:
        return 'Thursday';
      case 4:
        return 'Friday';
      case 5:
        return 'Saturday';
      case 6:
        return 'Sunday';
      default:
        return day;
    }
  }

  render() {  
    const location = this.state.location.map((line, i) => <p key={ i }>{ line }</p>);
    const photos = this.state.photos.map(photo => `${photo}`);
    const phone = this.state.phone.substr(2).replace(/(\d{3})(\d{3})(\d{4})/, "Phone: ($1) $2-$3");// removes the +1 and formats the numbers

    const hours = this.state.hours.map((day, i) => {
      return (
        <div key={ i }>
          <li>{ this.convertDays(day.day) }</li>
          <li>Open: { day.start.replace(/(\d{2})(\d{2})/, "$1:$2") }</li>
          <li>Close: { day.end.replace(/(\d{2})(\d{2})/, "$1:$2") }</li>
        </div>
      )
    });

    return (
      <div className="container">
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
          <div className="price">
            <p>{ this.state.price }</p>
          </div>
          <div className="rating">
            <p>{ this.state.rating }</p>
          </div>
          <div className="reviews">
            <p>{ this.state.review_count }</p>
          </div>
          <div className="phone">
            <p>
              <a href={ `tel:${ this.state.phone }` }>{ phone }</a>
            </p>
          </div>
          <div className="hours-block">
            <h4>Hours</h4>
            <ul>{ hours }</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default BusinessDetails;