import React, { useState,useEffect } from "react";
import TodoCard from "./card/todo_card";
import {
  getData,
  saveData,
  deleteEachData,
  clearData,
} from "../localStorage/localStorage";

function TodoApp() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  //   const handleChange = (e) => {
  //     setTodo([...todo, e.target.value]);
  //   };
  useEffect(() => {
    setTodo(getData());
  }, []);
  useEffect(() => {
    saveData(todo);
  }, [todo]);

  const displayTask = todo.map((item, index) => (
    <li key={index} className="mb-2">
      {index + 1}. {item}{" "}
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  ));
  const handleChange = () => {
    if (inputValue.trim() === "") return; // ignore empty
    setTodo([...todo, inputValue]);
    // saveData([...todo, inputValue]);
    // setTodo(getData());
    setInputValue(""); // clear input
  };
  const deleteAll = () => {
    setTodo(clearData());
  };
  const deleteTodo = (index) => {
    const newTodo = deleteEachData(index);
    setTodo(newTodo);
  };
  const action = {
    inputValue,
    setInputValue,
    handleChange,
    displayTask,
    deleteAll,
  };
  return (
    <>
      <TodoCard action={action} />
    </>
  );
}
export default TodoApp;
