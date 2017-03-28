/**
 * Created by Shahen Kosyan on 3/1/17.
 */

import React, {Component} from 'react';
import './App.css';
import Search from './search';
import FilteredList from './filteredList';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      filter: ''
    };
  }

  handleInputChange(e) {
    this.setState({
      filter: e.target.value
    });
  }

  render() {
    return (
      <div className="component">
        <h1>Filtered List</h1>
        <Search onInputChange={this.handleInputChange} />
        <FilteredList filter={this.state.filter} />
      </div>
    );
  }
}

export default App;
