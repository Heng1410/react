import React, { useState } from "react";
import TodoCard from "../card/todo_card";

function TodoApp() {
  const [todo, setTodo] = useState(["Drink Coffee", "Go to Gym", "Read Book"]);
  const [inputValue, setInputValue] = useState("");
  //   const handleChange = (e) => {
  //     setTodo([...todo, e.target.value]);
  //   };
  const displayTask = todo.map((item, index) => (
    <li key={index} className="mb-2">
      {index + 1}. {item}{" "}
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  ))
  const handleChange = () => {
    if (inputValue.trim() === "") return; // ignore empty
    setTodo([...todo, inputValue]);
    setInputValue(""); // clear input
  };
  const deleteTodo = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };
  const action = {inputValue, setInputValue, handleChange,displayTask };
  return (
    <>
      <TodoCard action={action}/>
    </>
  );
}
export default TodoApp;
