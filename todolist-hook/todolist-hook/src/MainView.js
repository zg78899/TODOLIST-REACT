import React, { useState } from 'react';
import './App.css';
import InputTodo from './components/InputTodo/InputTodo';
import Navigation from './components/Navigation/Navigation';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';


function MainView() {
  
  const [state, setState] = useState({
    todos: [
      { id: 1, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 3, content: 'Javascript', completed: false }
    ],
  });
  const [navs, setNavState]= useState(
    [
      {id:'all',toggle:true},
      {id:'active',toggle:false},
      {id:'completed',toggle:false},
    ]
  );
  // const nav = useRef();
  const {todos}=state;
  // const {navState}=navs;
  // const countCompleted =todos.filter(todo => todo.completed).length;
  // const itemLeft = todos.filter(todo => !todo.completed).length;

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
   setNavState(
     navs.map(navItem=>navItem.id === id? {...navItem, toggle: true} : {...navItem, toggle: false})
    )
    console.log(id);
  }
  return (
    <>
      <div className="container">
        <h1 className="title">Todos</h1>
        <div className="ver">1.0</div>

        <InputTodo {...state.todos} addTodo={addTodo}/>
        <Navigation navs={navs} changeNav={changeNav}/>
        <TodoList navs={navs} {...state} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        <Footer {...state} removeAll={removeAll} toggleAll={toggleAll}/>
      </div>
    </>
  )
}
export default MainView;



