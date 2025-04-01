import React, { Component } from 'react'
import { IoMdAdd } from "react-icons/io";
import './InputContainer.css'

export default class InputContainer extends Component {
  render() {
    return (
      <div className='input-container'>
        <input type='text' placeholder='Add your Todos here' onChange={this.props.setTodoValue}/>
        <button className='add-todo' onClick={this.props.addTodo}><IoMdAdd size={17} color='white'/></button>
      </div>
    )
  }
}
