import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const increaseCount = () => {
    setCount(count + 1) 
  }
  const decreaseCount = () => {
    setCount(count - 1) 
  }

  return (
    <>
      <div>
        
      </div>
      <h1> Counter </h1>
      <div className="card ">
        <button onClick={ decreaseCount} >Decrease </button>
        <span style={{ margin: '0 10px 0 30px' }}>count is  :  {count} </span>
        <button onClick={increaseCount}>
         Increase
        </button>
        
      </div>
    </>
  )
}

export default App
