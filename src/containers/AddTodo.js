import React from 'react'
import { Button, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import './AddTodo.css'

let AddTodo = ({ dispatch }) => {
  return (
    <div className="AddTodo">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const input = document.querySelector("input[name=todo]");
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <Input className="TodoText" placeholder="Enter a Task..." name="todo" />
        <Button basic color="green" className="TodoButton" basic type="submit">
          New Task
        </Button>
      </form>
    </div>
  );
}
AddTodo = connect()(AddTodo)

export default AddTodo
