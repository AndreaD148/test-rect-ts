import React from 'react';
import './App.css';

import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Header title="Title of the app" btnInitialValue="Change value"></Header>
      <Body></Body>
    </div>
  );
}

export default App;
