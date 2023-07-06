import logo from './logo.svg';
import React from 'react';
import './App.css';
import Introduction from './Introduction';
import Experiences from './Experiences';

function App() {
  let count =0;
  return (
    <div>
     <Introduction/>
     <Experiences/>
    </div>
  );
}

export default App;
