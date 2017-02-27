import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';
let store = createStore(reducer);

import './index.css';

ReactDOM.render(
  (
  	<Provider store={store}>
  		<App />
  	</Provider>
  ),
  document.getElementById('root')
);
