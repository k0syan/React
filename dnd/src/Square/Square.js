/**
 * Created by Shahen Kosyan on 3/25/17.
 */

import React, {Component} from 'react';
import './Square.css';

class Square extends Component {

  componentDidMount() {
    const {black} = this.props;
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    this.refs.Square.style.backgroundColor = fill;
    this.refs.Square.style.color = stroke;
  }

  render() {
    return <div className="square" ref="Square">
      {this.props.children}
    </div>
  }
}

export default Square;