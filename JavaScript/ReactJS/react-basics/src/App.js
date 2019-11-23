import React from 'react';
import './App.css';
import { Header } from "./components/Header";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <Header homeLink="Home"/>
        </div> 
      </div>
    </div>
  );
}

export default App;
