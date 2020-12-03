import React from 'react';

import Login from './components/login';
import Register from './components/register';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Login /> */}
      </header>
      <Login />
      <Register />
      <div>hello world</div>
    </div>
  );
}

export default App;
