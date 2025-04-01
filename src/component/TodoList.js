import React, { Component } from "react";
import InputContainer from "./InputContainer";
import "./TodoList.css";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoValue: "",
      todoList: [],
    };
    this.setTodoValue = this.setTodoValue.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  setTodoValue(event) {
    this.setState({ todoValue: event.target.value });
  }

  addTodo() {
    let todoList = [];
    todoList.push({ text: this.state.todoValue, completed: false });
    this.setState({ todoList: todoList });
    console.log(todoList);
  }
  
  render() {
    return (
      <div className="todo-list">
        <h1>Todo List</h1>
        <InputContainer
          setTodoValue={this.setTodoValue}
          addTodo={this.addTodo}
        ></InputContainer>
        <div className="todo-container">
          {this.state.todoList.map((item) => (
            <Todo {...item}></Todo>
          ))}
        </div>
      </div>
    );
  }
}
