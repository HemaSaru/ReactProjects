import { useState } from "react";
import { useToDos } from "../../context/ToDoContext";

function todoItem({todo}) {
    // console.log(todo);
    const {editTodo, deleteTodo} = useToDos();

    const [isTodoEditable, setTodoEditable] = useState(false);
    const  [editFieldText, setEditFieldText] = useState(todo.Task);
    const [isCompleted, setIsCompleted] = useState(false);

const updateTodoTask = ()=>{
  const newTodo = {...todo, Task: editFieldText};
  editTodo(newTodo);
}

const handleCOmpleteStatus = () => {
  // console.log("status change krenge");
  setIsCompleted((prevStat) => !prevStat);
}

// const deleteTodo = (e) => {
// console.log("delete krenge", e.todo)
// }

    return (
      <>
      <div className={` flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black w-full ${isCompleted ? "bg-green-400" : "bg-[#f1f1f1]" } "`}  >

        <input type="checkbox" className="cursor-pointer " onChange={handleCOmpleteStatus}/>
        <input
          type="text"
          className={` border outline-none w-full bg-transparent rounded-lg " ${isTodoEditable ? "border-red-500" : "border-transparent" } 
          ${isCompleted? "line-through" : "" } `} onChange={(e)=> {setEditFieldText(e.target.value)}}
          value={editFieldText} readOnly={!isTodoEditable}
        />
        {/* Edit, Save Button */}
        <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50" onClick={ ()=>{
          if(isTodoEditable){
            updateTodoTask();
            setTodoEditable(false)
          }
          else{
            setTodoEditable(true)
          }
        } }
        >
          {isTodoEditable ? "📂" :"✏️"}
        </button>
        {/* Delete todo Button */}
        <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0" onClick={(e) => {deleteTodo(todo.id)}}>
          ❌
        </button>
      </div>
      </>
    );
  }
  
  export default todoItem;
  