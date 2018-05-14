import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Game from './game/Game'

const style = {
  display: "flex"
}
const renderGames = () =>
  (
    <div style={style}>
      <Game/>
      <Game/>
      <Game/>
    </div>
  )


ReactDOM.render(renderGames(), document.getElementById('root'));
