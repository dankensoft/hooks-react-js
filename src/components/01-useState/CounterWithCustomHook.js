import React from 'react';
import './counter.css'
import {useCounter} from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

  const {state, increment, reset, decrement} = useCounter();

  return (
    <>
      <h1>Counter with Hook: { state } </h1>
      <hr />
      <button onClick={() => increment(2)} className="btn">+2</button>
      <button onClick={reset} className="btn">Reset</button>
      <button onClick={() => decrement(2)} className="btn">-2</button>
    </>
  )
}
