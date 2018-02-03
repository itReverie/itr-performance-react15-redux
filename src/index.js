import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore.dev';
import {Provider} from 'react-redux';
import './index.css';
import '../node_modules/highlight.js/styles/atom-one-dark.css';
import Routes from './routes';
import {loadConcepts} from './actions/conceptActions';
import registerServiceWorker from './registerServiceWorker';

//TODO: Set up unit testing
//Set the store redux
//If we pass an initial state parameter it will overwrite the initial state we are passing in each reducer
const store=configureStore();

//Dispatch Actions
store.dispatch(loadConcepts());

ReactDOM.render(
  (<Provider store={store}>
    <Routes />
    </Provider>),
  document.getElementById('root'));
registerServiceWorker();
