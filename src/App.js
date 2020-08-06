import React from 'react';
import FirstScreen from './Compnents/screen1';
import SecondScreen from './Compnents/screen2';
import 'reactstrap/dist/reactstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  console.log("app called");
  return (

    <div>
      <header className="App-header">
        <SecondScreen />
        <FirstScreen />
      </header>
    </div>

  );
}

export default App;
