import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {November} from './App';
import {January} from './App';
import {March} from './App';

ReactDOM.render(<November />, document.getElementById("November"))
ReactDOM.render(<January />, document.getElementById("January"))
ReactDOM.render(<March />, document.getElementById("March"))