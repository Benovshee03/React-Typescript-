import React from 'react';
import logo from './logo.svg';
import './App.css';
import NumberCounter from './components/NumberCounter';
import UserInfo from './components/UserInfo';
import RegisterForm from './components/RegisterForm'
import CalculatePrice from './components/CalculatePrice';
import PrimitiveNonPrimitives from './components/PrimitiveNonPrimitives';

function App() {
  return (
    <div className="App">
      {/* <NumberCounter/> */}
      {/* <UserInfo/> */}
      {/* <RegisterForm/> */}
      <CalculatePrice/>
      <PrimitiveNonPrimitives/>
      
    </div>
  );
}

export default App;
