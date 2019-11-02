import React, { Component } from 'react';
import Footer from './containers/footer.js';
import Header from './containers/header.js';
import './App.css';
import 'react-bootstrap';

class App extends Component {
      constructor(props) {
        super(props) 
      }
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
