import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset, restar, restar5, sumar, sumar5 } from '../actions/contadorActions';

const Contador = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Contador Redux</h2>
      <nav>
        <button onClick={()=> dispatch(sumar5())}>+5</button>
        <button onClick={()=> dispatch(sumar())}>+</button>
        <button onClick={()=> dispatch(reset())}>0</button>
        <button onClick={()=> dispatch(restar())}>-</button>
        <button onClick={()=> dispatch(restar5())}>-5</button>
      </nav>
      <h3>{state.contador}</h3>
    </>
    
  )
}

export default Contador;