import React, { Component } from 'react';
import './App.css';
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
    axios.post('http://localhost:3030/api/yelp/', { ...this.state })
      .then(results => {
        this.setState({
          searchTerm: '',
          results: results.data
        })
      })
  }

    render() {
// declaring results here allows us to map over the array provided in state, and then pick out only the name and image from the data
    const results = this.state.results.map((result, i) => (
      <div className='result' key={ i }>
        <Link to={`/business/${result.id}`}><h2>{ result.name }</h2></Link>
        <img src={ result.image_url } alt="buisness images" />
      </div>
    ));
  
    return (
      <div className='app'>
        <form onSubmit={ this.handleSubmit }>
          <input
            type="search"
            placeholder="Search for a business!"
            value={ this.state.searchTerm }
            onChange={ this.handleInput }
          />
        </form>
        { results }
      </div>
    );
  }
}

export default App;