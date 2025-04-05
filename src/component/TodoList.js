import React, { useState } from "react";
import InputContainer from "./InputContainer";
import "./TodoList.css";
import Todo from "./Todo";

export default function TodoList() {
  const [todoValue, setTodoValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    let todoArray = todoList;
    todoArray.push({ text: todoValue });
    setTodoList(todoArray);
  };

  const removeTodo = (text) => {
    setTodoList(todoList.filter((item) => item.text !== text));
  };
  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <InputContainer
        setTodoValue={(event) => setTodoValue(event.target.value)}
        addTodo={() => addTodo()}
      ></InputContainer>
      <div className="todo-container">
        {todoList.map((item) => (
          <Todo {...item} removeTodo={() => removeTodo(item.text)}></Todo>
        ))}
      </div>
    </div>
  );
}
