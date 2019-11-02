import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
    super(props) 
    this.state = {
        quotes: ["test", "test2", "test3", "test4"],
        authors: ["a1", "a2", "a3", "a4"]
        }    
    }

    render() {
        var index = Math.floor(Math.random() * this.state.quotes.length);
        console.log(index);
        return(
        <div>
            <h3>{this.state.quotes[index]}</h3>
            <h3>{this.state.authors[index]}</h3>
        </div>    
        );
    }
}

export default Footer;