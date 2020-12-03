import React from 'react';

import Login from './components/login';
import Register from './components/register';
import UserSettings from './components/userSettings';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Login /> */}
      </header>
      <Login />
      <Register />
      <UserSettings />
      <div>hello world</div>
    </div>
  );
}

export default App;
