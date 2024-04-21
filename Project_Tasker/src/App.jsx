import { useState } from 'react'
import { TodoItem, TodoForm } from './components/ToDo';
import {  ToDoContextProvider } from './context/ToDoContext';

function App() {
  const[toDo, setToDo]= useState([]);

  const addTodo  =(toDoTask)=>{
    setToDo((prevTask) => [...prevTask, toDoTask]);
  }

  const editTodo = (toDoTask) => {
    console.log("edit hua", toDoTask);
    setToDo((prevTask) => prevTask.map((prevTodo) => (prevTodo.id === toDoTask.id ? toDoTask : prevTodo ) ))
  }

  const deleteTodo = (id) => {
    console.log(id);
    setToDo((prevTask) =>  prevTask.filter((task) => task.id !== id));
  }

  return (
    <ToDoContextProvider value={{ toDo, addTodo, editTodo, deleteTodo}}>
      <div className="bg-[#000] min-h-screen w-full flex">
        <div className="left w-[500px] bg-red-400 h-screen">
          <img src="https://images.pexels.com/photos/6687773/pexels-photo-6687773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="h-full w-full object-cover"/>
        </div>
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            My Tasker
          </h1>
          <div className="mb-4">
           <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3 ">
            {toDo.map((todo) => (
              <div className="w-full" key = { todo.id}>
                    <TodoItem todo = {todo} />
                </div>
            ))}
        
          </div>
        </div>
      </div>
      </ToDoContextProvider>
  );
}


export default App
