import React, {Component} from 'react';
import {DropTarget, DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './Container';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideSourceOnDrag: true,
    };
  }

  render() {
    const {hideSourceOnDrag} = this.state;

    return (
      <div className="App">
        <Container hideSourceOnDrag={hideSourceOnDrag} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
