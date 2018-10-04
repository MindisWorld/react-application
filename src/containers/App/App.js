import React, { Component } from 'react';

import './App.css';

import SearchForm from '../SearchForm/SearchForm';
import OverlayContainer from '../OverlayContainer/OverlayContainer';

class App extends Component {

  render() {
    return (
      <div className="App container">
        <OverlayContainer />
        <SearchForm />
      </div>
    );
  }

}

export default App;
