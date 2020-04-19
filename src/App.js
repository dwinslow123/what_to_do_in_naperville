import React, { Component } from 'react';
import './css/styles.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class App extends Component {
  state = {
    searchTerm: '',
    results: [],
  }

  handleInput = (e) => {
    this.setState({ searchTerm: e.target.value })
  }


// handleSubmit first stops the form from refreshing, and then sends a post request to the backend with an array created off of this.state, and then sets the state using those results. 
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://plaidypus-intro.herokuapp.com/api/yelp/' || 'http://localhost:3030/api/yelp', { ...this.state })
      .then((results) => {
        this.setState({
          searchTerm: '',
          results: results.data
        })
      })
      .catch((res, err) => {
        res.status(500).json(err);
      });
  }

    render() {
// declaring results here allows us to map over the array provided in state, and then pick out the information we want from the data
    const results = this.state.results.map((result, i) => (
      <div className="results-list" key={ i }>
        <div className="result">
          <Link to={`/business/${result.id}`}><h2 className="result-name">{ result.name }</h2></Link>
          <img className="result-photo" src={ result.image_url } alt="stock images" />
          <p>Price: { result.price }</p>
          <div className="address-block">
            { Object.values(result.location.display_address).map((line, i) => <p key={ i }>{ line }</p>) }
          </div>
        </div>
      </div>
    ));
  
    return (
      <div className='main-page'>
        <div className="search">
          <h2>What is there to do in Naperville?</h2>
          <form onSubmit={ this.handleSubmit }>
            <p>Type in your favorite activity below and we'll show you!</p>
            <input
              type="search"
              placeholder="e.g. pizza, water sports, stained glass"
              value={ this.state.searchTerm }
              onChange={ this.handleInput }
            />
            <button type="submit">
              submit
            </button>
          </form>
        </div>
        <div className="results">
        { results.length === 0 ? <p className="results-text">Check out Naperville!</p> : results }
        </div>
      </div>
    );
  }
}

export default App;
