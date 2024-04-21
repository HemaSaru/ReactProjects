import React from "react";


import { createContext, useContext } from "react";

export const ToDoContext = React.createContext({
    toDo: [],
    addTodo: (toDo) => {},
    editTodo: (toDo) => {},
    deleteTodo: (toDo) => {}
});

export const ToDoContextProvider = ToDoContext.Provider;

export const  useToDos =() => {
    return useContext(ToDoContext);
}
