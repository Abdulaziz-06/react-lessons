import React from 'react';
import Fruit from './Fruit';
import './App6.css';

const App6 = () => {
  const fruits = ['Apple', 'Orange', 'Mango', 'Banana']; 
  
  return (
   
    <div className="fruit-container">
        <h1>This is App6 component</h1>
      {fruits.map((fruit, a) => (
        <Fruit key={a} name={fruit} />
      ))}
    </div>
  );
};

export default App6;
