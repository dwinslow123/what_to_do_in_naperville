import React, { Component } from 'react';
import { StarRating } from './StarRating';

class DetailsBox extends Component {
  render() {
    return (
      <div>
        <div className="details">
    <div className="rating">
      <StarRating rating={ this.props.rating } />
      <div className="reviews">
      <p>{ this.props.review_count }</p>
    </div>
    </div>
    <div className="price">
      <p>{ this.props.price }</p>
    </div>
    <div className="phone">
      <p>
        <a href={ `tel:${ this.props.phone }` }>{ this.props.phone }</a>
      </p>
    </div>
</div>
      </div>
    )
  }
}

export default DetailsBox;