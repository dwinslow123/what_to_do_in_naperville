import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    searchTerm: '',
    results: [],
  }

  handleInput = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3030/api/yelp', { ...this.state })
      .then(results => {
        this.setState({
          searchTerm: '',
          results: results.data
        })
        console.log(results)
      })
    }
    
    render() {
   
    const results = this.state.results.map((result, i) => (
      <div className='result' key={ i }>
        <h2>{ result.name }</h2>
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
          { results }
        </form>
      </div>
    );
  }
}

export default App;