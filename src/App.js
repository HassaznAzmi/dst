import React, { Component } from 'react';
import './App.css';
import TemporaryDrawer from './components/Drawer';
import Timeline from './components/Timeline';
import Heading from './components/Heading';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TemporaryDrawer></TemporaryDrawer>
        {/* <Heading></Heading> */}
        {/* <Timeline></Timeline> */}
      </div>
    );
  }
}

export default App;
