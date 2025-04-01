import React, { Component } from 'react'
import { IoMdAdd } from "react-icons/io";
import './InputContainer.css'

export default class InputContainer extends Component {
  render() {
    return (
      <div className='input-container'>
        <input type='text'/>
        <button className='add-todo'><IoMdAdd size={17} color='white'/></button>
      </div>
    )
  }
}
