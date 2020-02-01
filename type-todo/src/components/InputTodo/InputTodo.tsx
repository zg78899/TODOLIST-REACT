import React from 'react';
import {ITodo} from '../../types/Todo';

type Props={
  todos:ITodo[],
  add:( event:React.KeyboardEvent<HTMLInputElement>)=>void
}

const  InputTodo=({add}:Props)=> {
  // console.log(props);
  return (
    <div>
      <input className="input-todo" placeholder="What needs to be done?" autoFocus onKeyDown={add} />
    </div>
  )

}
export default InputTodo;