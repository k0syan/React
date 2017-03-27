import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board/Board';
import {observe} from './Game';
import './index.css';

observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    document.getElementById('app')
  )
);