import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './src/Routes';
import reducers from './src/reducers';

export default class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyAtXWDPUNCsQHP-Siq1qC-ssG1RW4uCs-Y",
      authDomain: "whatsbusiness-20190509.firebaseapp.com",
      databaseURL: "https://whatsbusiness-20190509.firebaseio.com",
      projectId: "whatsbusiness-20190509",
      storageBucket: "whatsbusiness-20190509.appspot.com",
      messagingSenderId: "519682617290",
      appId: "1:519682617290:web:f119405a68a64778"
    });
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}