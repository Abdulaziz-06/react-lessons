import React from 'react'
import App2 from './App2'
import { Link } from 'react-router-dom'
export default function Product() {
  return (
    <div>
       <h1>This is App2 component</h1>
      <div className="App-Product-Container">
        {products.map((value) => (
          <div className="App-Product-Box" key={value.id}>
            <h3>{value.name}</h3>
            <h4>{value.price}</h4>
            <p><button>Add to Cart</button></p>
          </div>
        ))}
      </div>
    </div>
  )
}
