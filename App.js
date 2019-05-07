import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Rotas from './src/Routes';


export default class App extends Component{
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Rotas/>
      </Provider>
    );
  }
}