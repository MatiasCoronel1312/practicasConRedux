import React from 'react';
import { useSelector } from 'react-redux';

const Contador = () => {
  const state = useSelector(state => state);
  return (
    <h2>Contador Redux</h2>
    <nav>
      <button onClick={()=>{}}>+5</button>
      <button onClick={}>+</button>
      <button onClick={}>0</button>
      <button onClick={}>-</button>
      <button onClick={}><-5/button>
    </nav>
    <h3>{state.Contador}</h3>
  )
}

export default Contador;