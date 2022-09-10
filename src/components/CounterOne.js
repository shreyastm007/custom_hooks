import React from 'react'
import useCounter from '../hooks/useCounter';

const CounterOne = () => {

   const[count, increment,decrement,reset] =useCounter(10,20)
  return (
    <>
    <h2> Count value:- {count}</h2>
    <button
    onClick={ () =>{
    increment(5);
    }}
    > Increment
    </button>
   


{/* <button onClick={increment}> Increment</button> */}
<button onClick={decrement}> Decrement</button>
<button onClick={reset}> Reset</button>


    </>
  )
}

export default CounterOne