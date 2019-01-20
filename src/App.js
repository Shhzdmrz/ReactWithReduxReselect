import React, { Component } from 'react';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import './App.css';

import Controller from './controller';

const store = configureStore()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Controller />
      </Provider>
    );
  }
}

export default App;
