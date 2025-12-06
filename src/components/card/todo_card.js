import React from "react";

function TodoCard(props) {
  const { inputValue, setInputValue, handleChange, displayTask, deleteAll } =
    props.action;
  return (
    <>
      <h1 className="text-center">To-do List</h1>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        className="m-2"
        value={inputValue}
      />
      <button onClick={handleChange}>Add</button>{" "}
      <button onClick={deleteAll}>Clear All</button>
      <div>
        <ul>
          {displayTask}
          {/* {todo.map((item, index) => (
            <li key={index} className="mb-2">!
              {index + 1}. {item}{" "}
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))} */}
        </ul>
      </div>
    </>
  );
}
export default TodoCard;
