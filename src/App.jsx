import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  let color = counter <=4 ? "green" : counter <=8 ? "orange" : "red";

  function increase()
  { 
    if(counter < 10)
    {
      setCounter(counter + 1) 
    }
  }

  function decrease()
  {  
    if(counter > 0)
    {
      setCounter(counter - 1) 
    }
    
  }

  function reset()
  { setCounter(0) }

  return (
      <>
        <h1>My Count :  <span style={{color: color}}>{counter}</span> </h1>
        <h2> * Max 10 *</h2>
        <button onClick={increase}  disabled={counter === 10}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrease}  disabled={counter === 0}>-</button>
      </>
  )
}

export default App
