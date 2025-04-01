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
    this.removeTodo = this.removeTodo.bind(this);
  }

  setTodoValue(event) {
    this.setState({ todoValue: event.target.value });
  }

  addTodo() {
    let todoList = this.state.todoList;
    todoList.push({ text: this.state.todoValue, completed: false });
    this.setState((prev) => {
      return {
        ...prev,
        todoList: todoList,
      };
    });
  }

  removeTodo(text) {
    this.setState((prev) => {
      return {
        todoList: prev.todoList.filter((item) => item.text !== text),
      };
    });
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
            <Todo
              {...item}
              removeTodo={() => this.removeTodo(item.text)}
            ></Todo>
          ))}
        </div>
      </div>
    );
  }
}
