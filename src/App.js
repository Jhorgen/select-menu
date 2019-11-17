import React, { Component } from 'react';
import './App.css';
import 'react-bootstrap';
import SearchResults from './containers/SearchResult.js'

class App extends Component {
      constructor(props) {
        super(props)
      }
  render() {
    return (
      <div className="App">
        <h1>Search Result Selection</h1>
        <SearchResults />
      </div>
    );
  }
}

export default App;
