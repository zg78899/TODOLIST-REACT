import React from 'react';
import uuid from 'uuid';
import {ITodo} from '../../types/Todo';
import {INavs} from '../../types/Nav';

type Props = {
  todos:ITodo[],
  navs:INavs[],
  toggle:(id:number)=>void
  remove:(id:number)=>void
}

const TodoList=({navs,todos,toggle,remove}:Props)=> {
  console.log(navs[0].id);
  console.log(todos);
  const _todos=todos.filter(todo=>navs[0].toggle?todo:navs[1].toggle?!todo.completed:todo.completed)
  return (
    <div>
      <ul className="todos">
          {_todos.map(todo => (
            <li key={uuid.v4()} id={todo.id + ''} className="todo-item">
              <input className="custom-checkbox" id={`ck-${todo.id}`} type="checkbox" checked={todo.completed ? true : undefined} onChange={()=> toggle(todo.id)} />
              <label htmlFor={`ck-${todo.id}`}>{todo.content}</label>
              <i className="remove-todo far fa-times-circle" onClick={() =>remove(todo.id)} ></i>
            </li>
          ))}
        </ul>
    </div>
  )

}
export default TodoList;