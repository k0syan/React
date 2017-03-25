/**
 * Created by Shahen Kosyan on 3/1/17.
 */

import React, {Component} from 'react';
import Countries from './countries';

class FilteredList extends Component {
  render() {
    let filteredCountries = [];
    let filter = this.props.filter.toLowerCase();

    for (let i = 0; i < Countries.length; ++i) {
      if (Countries[i].name.toLowerCase().indexOf(filter) > -1) {
        filteredCountries.push(Countries[i]);
      }
    }

    filteredCountries = filteredCountries.map((country) => {
      return <li key={country.code}>{country.name}</li>;
    });

    return (
      <ul className="filtered-list">
        {filteredCountries}
      </ul>
    );
  }
}

export default FilteredList;
