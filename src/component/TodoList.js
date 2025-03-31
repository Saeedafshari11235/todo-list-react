import React, { Component } from 'react'
import InputContainer from './InputContainer'
import './TodoList.css'

export default class TodoList extends Component {
  render() {
    return (
      <div className='todo-list'>
        <h1>Todo List</h1>
        <InputContainer></InputContainer>
      </div>
    )
  }
}
