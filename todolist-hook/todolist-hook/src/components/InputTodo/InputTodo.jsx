import React from 'react';

const  InputTodo=(props)=> {
  // console.log(props);
  return (
    <div>
      <input className="input-todo" placeholder="What needs to be done?" autoFocus onKeyDown={props.addTodo} />
    </div>
  )

}
export default InputTodo;