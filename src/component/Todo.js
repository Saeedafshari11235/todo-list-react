import React, { Component } from "react";
import { FaTrashCan } from "react-icons/fa6";
import "./Todo.css";

export default class Todo extends Component {
  render() {
    return (
      <div className={`todo ${this.props.completed ? "done" : null}`}>
        <p>{this.props.text}</p>
        <button className="remove-todo" onClick={this.props.removeTodo}>
          <FaTrashCan size={17}/>
        </button>
      </div>
    );
  }
}
