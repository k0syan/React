/**
 * Created by Shahen Kosyan on 3/1/17.
 */

import React, {Component} from 'react';

class Search extends Component {
  render() {
    return (
      <input type="text" placeholder="Filter..."
             className="search"
             onChange={this.props.onInputChange}
      />
    );
  }
}

export default Search;