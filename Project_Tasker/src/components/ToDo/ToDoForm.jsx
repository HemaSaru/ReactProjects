import { useState } from "react";
import { useToDos } from "../../context/ToDoContext";

function TodoForm() {

    const [task, setTask] = useState("");
    const  { addTodo } = useToDos();

    const  handleSubmit = (e) => {
        e.preventDefault();
        if (!task) return;

        const  newTodo = {id: Date.now(), Task: task, isCompleted: false}
        console.log(newTodo);
      
        addTodo(newTodo);
        setTask("");

    }
    return (
        <form className="flex" onSubmit={(e)=>{handleSubmit(e)}} >
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=>{
                    setTask(e.target.value)
                    console.log(e.target.value);
                }} value={task}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-[#22a6b3] text-white shrink-0">
                Add
            </button>
        </form>
    );
  }
  
  export default TodoForm;