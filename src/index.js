import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.scss';

ReactDOM.render(
   <Provider store={store}>
      <HomePage />
   </Provider>,
   document.getElementById('root')
);

//in this file, we are using Provider component from react-redux which will allow us to share the store data
// to HomePage and all its child components
