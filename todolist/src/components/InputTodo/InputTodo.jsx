import React from 'react';

const InputTodo =props =>{
      return (
        <input className="input-todo" placeholder="What needs to be done?"  autoFocus onKeyDown={props.addTodo} />
      );
    }
    
  
export default InputTodo;