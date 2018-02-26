import React, { Component } from 'react';
import '../css/styles.css';
import Lightbox from 'react-image-lightbox';


class Photobox extends Component {
  state = {
    photoIndex: 0,
    isOpen: false,
  };
  
  render() {
    const { photoIndex, isOpen } = this.state;
    const images = this.props.photos;

    return (
      <div className="container">
        <img
          src={ images[photoIndex] }
          className="image"
          alt=""
          onClick={() => this.setState({ isOpen: true })}
        />
      <div className="middle">
        <div className="text">Click for more!</div>
      </div>

        { isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

export default Photobox;