import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const sampleTodos = ["Hello", "item2", "Namaster"];
function App() {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState([]);


  const handleItem = (e) => {
    if (e.target.value !== "") {
      setItem(e.target.value);
    }
  };

  const handleAddItems = () => {
    if (item !== "") {
      setTodos([...todos, item]);
      setItem("");
    } else {
      alert("Please Write something");
    }
  };

  const handleInput = (event) => {
    if(event.target.value){
    setItem(event.target.value)

    }
}

const addItems =() => {
  if (item !== "") {
    setTodos([...todos, item]);
    setItem("");
  } else {
    alert("Please Write something");
  }
}

  return (
    <div className=''>
      <h1 className="text-3xl font-bold underline">
        To-Do Lists
      </h1>

      <div className='mt-9'>
        <input type='text' name='task' id='taskInput' onChange={(event) => handleInput(event)} />
        <button onClick={addItems} className='border-2 border-slate-400 bg-slate-400 px-5 py-1 text-white rounded-md ml-5'>Add To List </button>
      </div>
      <div>
        <h2></h2>
        <br />
        <ol>
          {todos.map((todo, i) => {
            return <li key={i}>{todo}</li>;
          })}
        </ol>
      </div>
    </div>
  )
}

export default App
