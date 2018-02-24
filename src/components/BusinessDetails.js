import React, { Component } from 'react';
import axios from 'axios';

class BusinessDetails extends Component {
  state = {
    name: '',
    url: '',
    price: '',
    rating: '',
    review_count: '',
    phone: '',
    location: '',
  }

  componentWillMount() {
    this.getDetails();
  }

  getDetails = (e) => {
    const { id } = this.props.match.params;
    console.log(id);
    axios.post(`http://localhost:3030/api/yelp/business/${id}`, { ...this.state })
      .then(result => {
        this.setState({
          name: result.data.name,
          url: result.data.url,
          price: result.data.price,
          rating: result.data.rating,
          review_count: result.data.review_count,
          phone: result.data.phone,
          location: result.data.location.toString(),
        })
        console.log(result);
      })
  }

  render() {
    return (
      <div>
        { console.log(this.state) }
        Testing
        <p>{ this.state.name }</p>
        <p>{ this.state.url }</p>
        <p>{ this.state.price }</p>
        <p>{ this.state.rating }</p>
        <p>{ this.state.review_count }</p>
        <p>{ this.state.phone }</p>
        <p>{ this.state.location }</p>
      </div>
    )
  }
}

export default BusinessDetails;