import React from 'react';
import './App.css';
import NumberCounter from './components/NumberCounter';
import UserInfo from './components/UserInfo';
import RegisterForm from './components/RegisterForm'
import CalculatePrice from './components/CalculatePrice';
import PrimitiveNonPrimitives from './components/PrimitiveNonPrimitives';
import InitialState from './components/InitialState';

function App() {
  return (
    <div className="App">
      {/* <NumberCounter/> */}
      {/* <UserInfo/> */}
      {/* <RegisterForm/> */}
      <CalculatePrice/>
      <PrimitiveNonPrimitives/>
      <InitialState/>

      
    </div>
  );
}

export default App;
