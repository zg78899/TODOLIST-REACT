import React, { createRef } from 'react';
import './App.css';

import InputTodo from './components/InputTodo/InputTodo';
import TodoList from './components/TodoList/TodoList';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

class MainView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, content: 'HTML', completed: false },
        { id: 2, content: 'CSS', completed: true },
        { id: 3, content: 'Javascript', completed: false }
      ],
      navState: 'all'
    }
  }
  inputRef = createRef();
  nav = createRef();

  generateId = () => this.state.todos.length ? Math.max(...this.state.todos.map(todo => todo.id)) + 1 : 1;

  addTodo = ({target,keyCode}) => {
    // console.log(e.keyCode);
    const content = target.value.trim();
    if (keyCode !== 13 || content === '') return;
    // console.log(content);
    this.setState({
      todos: [{ id: this.generateId(), content, completed: false }, ...this.state.todos,]
    });
    target.value = '';
  }

  toggleTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => todo.id === +id ? { ...todo, completed: !todo.completed } : todo)
    }, () => console.log(this.state.todos.filter(todo => todo.id === id)));
  }
  removeTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== +id)
    })
  }
  toggleAll = (checked) => {

    this.setState({
      todos: this.state.todos.map(todo => ({ ...todo, completed: checked }))
    })
  }
  removeAll = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  changeNav = (id, nav) => {
    console.log(id,nav);
    
    //  console.log([...this.nav.current.children]);
    [...nav.current.children].forEach(navItem => {
      navItem.classList.toggle('active', navItem.id === id)
    });
    this.setState({
      navState: id
    }, () => { console.log(this.state) })
  }
  // const _todos = this.state.todos.filter(({ completed }) => this.state.navState === 'active' ? !completed : this.state.navState === 'all' ? true : completed)
  render() {
    return (
      <>
        <div className="container">
          <h1 className="title">Todos</h1>
          <div className="ver">1.0</div>
          <InputTodo {...this.state} addTodo={this.addTodo}/>
          <Navigation ref={this.nav} {...this.state} changeNav={this.changeNav}/>
          <TodoList {...this.state} toggleTodo={this.toggleTodo} removeTodo={this.removeTodo}/>
          <Footer {...this.state} removeAll={this.removeAll} toggleAll={this.toggleAll}  />
        </div>
      </>
    )
  }
}
export default MainView;
하하하하하