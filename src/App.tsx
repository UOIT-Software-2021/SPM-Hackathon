import React from 'react';
import logo from './logo.svg';
import './App.css';

const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
}

function App() {
  return (
    <div className="App">
      <input type="text" onChange={(e: any ) => onInputChange(e)}/>
    </div>
  );
}

export default App;
