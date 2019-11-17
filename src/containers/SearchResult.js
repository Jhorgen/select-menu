import React from "react";
import ReactDOM from "react-dom";
import { container } from reactstrap

const stuff = ["one", "two", "three"];

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      showing: true,
      showAll: true,
      test: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(val, showing, test) {
      this.setState({ showing: !showing })
      this.setState({ test: !test })
      this.setState({ selected: val})
  }

  getStuff(showing) {
    var results = stuff.map((value, key) => {
      return (
        <li className="test" key={key} onClick={() => this.handleClick(value)}>
          <h3 className="list-items">{value}</h3>
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
      <div class="container">

       { showing
         ? <div><ul>{this.getStuff()}</ul></div>
         : null
       }

       { test
         ? <button onClick={() => this.setState({ showing: !showing, showAll: !showAll, test: !test })}>Select</button>
         : null
       }

       { showing
         ? null
         : <h1>{this.state.selected}</h1>
      }

      { showAll
        ? null
        : <button onClick={() => this.setState({ showing: !showing, showAll: !showAll })}>Go Back</button>
      }

     </div>
  )
 }
}

export default SearchResults;
