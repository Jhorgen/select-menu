import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container } from "reactstrap";

export default class tester extends Component {
  constructor(props) {
      super(props);

      this.state = {
          borderColor: 'white',
          active_id: null,

  };
}

    handleProductSelect(productId) {
        const { borderColor } = this.state;
        let newBorderColour = borderColor === 'white' ? 'blue' : 'white';
        this.setState({
            borderColor: newBorderColour,
            active_id: productId
        })
    }

render() {
  let price = [1, 2, 3]
return(
    (price.map(p =>
        <div key={p.productId}>
            <div
                style={{
                    borderRadius: '10%',
                    borderStyle: 'solid',
                    padding: '10px',
                    marginBottom: 10,
                    borderColor: ( p.productId === this.state.active_id ? this.state.borderColor : 'white'),
                 }}
                onClick={this.handleProductSelect.bind(this, p.productId)}>
                <div>{p}</div>
                </div>
                <h1>wtf</h1>
        </div>
    ))

)}}
