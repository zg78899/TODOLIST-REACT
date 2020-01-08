import React from 'react';
import uuid from 'uuid';


const TodoList = props =>{
  console.log(props);
  console.log(props.toggleTodo);
  
  
  const _todos = props.todos.filter(({ completed }) => props.navState === 'active' ? !completed : props.navState === 'all' ? true : completed)
    return (
      <>
      <ul className="todos">
            {_todos.map(todo => (
              <li key={uuid.v4()} id={todo.id} className="todo-item">
                <input className="custom-checkbox" id={`ck-${todo.id}`} type="checkbox" checked={todo.completed ? 'checked' : ''} onChange={() => props.toggleTodo(todo.id)} />
                <label htmlFor={`ck-${todo.id}`}>{todo.content}</label>
                <i className="remove-todo far fa-times-circle" onClick={() => props.removeTodo(todo.id)}></i>
              </li>
            )
            )}
          </ul>
      </>
    )
  }


export default TodoList;