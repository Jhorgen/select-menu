import React from "react";
import ReactDOM from "react-dom";
import { Container } from "reactstrap";

const stuff = ["one", "two", "three"];

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      showing: true,
      showAll: true,
      test: false,
      active: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(val, showing, test, key) {
      this.setState({ showing: !showing })
      this.setState({ test: !test })
      this.setState({ selected: val})
  }

  getStuff() {
    var results = stuff.map((value, key) => {
      return (
        <li className="test" key={key} onClick={() => this.handleClick(value)}>
          <h3 className={this.state.active ? 'selected': null}>{value}</h3>
        </li>
      );
    });
    return results;
  }

  render() {
    const { showing } = this.state;
    const { showAll } = this.state;
    const { test } = this.state;
    return(
      <div class="Container search-page">
        <div class="row d-flex justify-content-center text-center mt-4">
        <div class="col-12">

       { showing
         ? <div><ul>{this.getStuff()}</ul></div>
         : null
       }

       { test
         ? <button class="btn-info btn btn-block" onClick={() => this.setState({ showing: !showing, showAll: !showAll, test: !test })}>Select</button>
         : null
       }

       { showing
         ? null
         : <h1>{this.state.selected}</h1>
      }

      { showAll
        ? null
        : <button class="btn btn-info btn-block" onClick={() => this.setState({ showing: !showing, showAll: !showAll })}>Go Back</button>
      }

    </div>
    </div>
   </div>
  )
 }
}

export default SearchResults;
