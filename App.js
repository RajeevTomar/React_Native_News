/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/navigation/Navigation';
import store from './src/store/Store';


export default class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <Navigation />
      </Provider>
    );
  }
}
