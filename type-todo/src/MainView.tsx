import React, { useState, useRef } from 'react';
import './App.css';
import InputTodo from './components/InputTodo/InputTodo';
import Navigation from './components/Navigation/Navigation';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';
import { ITodo } from './types/Todo';
import {INavs} from './types/Nav';

function MainView() {

  const getTodo = (): ITodo[] => ([
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ]);
  const [todos, setTodos] = useState(getTodo());
  const getNav=():INavs[]=>([
    { id: 'all', toggle: true },
    { id: 'active', toggle: false },
    { id: 'completed', toggle: false },
  ])
  const [navs, setNavState] = useState(getNav());

  const inputRef = useRef<HTMLInputElement>(null);
  // const nav = useRef();
  // const {navState}=navs;
  // const countCompleted =todos.filter(todo => todo.completed).length;
  // const itemLeft = todos.filter(todo => !todo.completed).length;
  const generateId = () => todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;

  const addTodo = ({ target, keyCode }: React.KeyboardEvent<HTMLInputElement>) => {
    const content = (target as HTMLInputElement).value.trim();
    if (keyCode !== 13 || content === '') return

    setTodos([{ id: generateId(), content, completed: false }, ...todos]);
    if (inputRef.current) inputRef.current.value = '';
  }
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    )
  }
  const removeTodo = (id: number) => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }
  const toggleAll = (checked: boolean) => {
    setTodos(
    todos.map(todo => ({ ...todo, completed: checked }))
    )
  }
  const removeAll = () => {
    setTodos(
    todos.filter(todo => !todo.completed)
    )
  }

  const changeNav = (id: string) => {
    setNavState(
      navs.map(navItem => navItem.id === id ? { ...navItem, toggle: true } : { ...navItem, toggle: false })
    )
    console.log(id);
  }
  return (

    <>
      <div className="container">
        <h1 className="title">Todos</h1>
        <div className="ver">1.0</div>

        <InputTodo  todos={todos} add={addTodo} />
        <Navigation navs={navs} change={changeNav} />
        <TodoList navs={navs} todos={todos} toggle={toggleTodo} remove={removeTodo} />
        <Footer todos={todos} removeAll={removeAll} toggledAll={toggleAll} />
      </div>
    </>
  )
}
export default MainView;
