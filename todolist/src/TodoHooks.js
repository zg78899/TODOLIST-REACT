import React, { useState,  createRef } from 'react';
import './App.css';
import uuid from 'uuid';


function TodoHooks() {
  
  const [state, setState] = useState({
    todos: [
      { id: 1, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 3, content: 'Javascript', completed: false }
    ],
  });
  const [navs, setNavState]= useState({
    navState:'all'
  });
  
  const nav = createRef();
  
  const {todos}=state;
  const {navState}=navs;
  
  const _todos=todos.filter(({completed})=>navState==='all'?true:navState==='active'?  !completed:completed)
  
  const countCompleted =todos.filter(todo => todo.completed).length;
  const itemLeft = todos.filter(todo => !todo.completed).length;

  const generateId = () => todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  
  const addTodo = ({ target, keyCode }) => {
    const content = target.value.trim();
    if (keyCode !== 13 || content === '') return

    setState({
      ...state,
      todos: [{ id: generateId(), content, completed: false }, ...todos]
    });
    target.value = '';
  }

  const toggleTodo = (id) => {
    setState({
      ...state,
      todos: todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    })
  }

  const removeTodo = (id) => {
    setState({
      ...state,
      todos: todos.filter(todo => todo.id !== id)
    })
  }
  const toggleAll = (checked) => {
    setState({
      ...state,
      todos: todos.map(todo => ({ ...todo, completed: checked }))
    })
  }
  const removeAll = () => {
    setState({
      ...state,
      todos: todos.filter(todo => !todo.completed)
    })
  }
  const changeNav = (id) => {
    // console.log([...nav.current.children]);
   [...nav.current.children].forEach(navItem => navItem.classList.toggle('active', navItem.id === id));
   setNavState({
     navState:id
    })
    console.log(id);
  }
  

  return (
    <>
      <div className="container">
        <h1 className="title">Todos</h1>
        <div className="ver">1.0</div>

        <input className="input-todo" placeholder="What needs to be done?" autoFocus onKeyDown={addTodo} />
        <ul ref={nav} className="nav" onClick={({target})=>changeNav(target.id)}>
          <li id="all" className="active">All</li>
          <li id="active">Active</li>
          <li id="completed">Completed</li>
        </ul>

        <ul className="todos">
          {_todos.map(todo => (
            <li key={uuid.v4()} id={todo.id} className="todo-item">
              <input className="custom-checkbox" id={`ck-${todo.id}`} type="checkbox" checked={todo.completed ? 'checked' : ''} onChange={() => toggleTodo(todo.id)} />
              <label htmlFor={`ck-${todo.id}`}>{todo.content}</label>
              <i className="remove-todo far fa-times-circle" onClick={() => removeTodo(todo.id)} ></i>
            </li>
          )
          )}
        </ul>

        <div className="footer">
          <div className="complete-all">
            <input className="custom-checkbox" type="checkbox" id="ck-complete-all" onChange={({ target }) => toggleAll(target.checked)} />
            <label htmlFor="ck-complete-all">Mark all as complete</label>
          </div>

          <div className="clear-completed">
            <button className="btn" onClick={removeAll}>Clear completed (<span className="completed-todos">{countCompleted}</span>)</button>
            <strong className="active-todos">{itemLeft}</strong> items left
  </div>
        </div>
      </div>
    </>

  )

}

export default TodoHooks;



