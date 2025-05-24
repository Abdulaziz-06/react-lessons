import React from 'react';
import './Fruit.css';

const Fruit = ({ name }) => {
  return (
    <div className="fruit-box">
      {name}
    </div>
  );
};

export default Fruit;
