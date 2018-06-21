import React from 'react';

export const StarRating = (props) => {
  switch (props.rating) {
    case 0.5:
      return (
        <div>
          <i className="fas fa-star-half"></i>
        </div>
      )
    case 1:
      return (
        <div>
          <i className="fas fa-star"></i>
        </div>
      )
    case 1.5:
      return (
        <div>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half"></i>
        </div>
      )
    case 2:
      return (
        <div>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      )
    case 2.5:
      return (
        <div>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half"></i>
        </div>
      )
    case 3:
      return (
        <div>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      )
    case 3.5:
      return (
        <div>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half"></i>
        </div>
      )
    case 4:
      return (
        <div>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      )
    case 4.5:
      return (
        <div>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half"></i>
        </div>
      )
    case 5:
      return (
        <div>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      )
    default:
      return props.rating
  }
}