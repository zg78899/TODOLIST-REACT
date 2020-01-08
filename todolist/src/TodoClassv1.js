import React, { createRef } from 'react';
import './App.css';
import uuid from 'uuid';



class TodoClassv1 extends React.Component {
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

  addTodo = e => {
    // console.log(e.keyCode);
    const content = this.inputRef.current.value.trim();
    if (e.keyCode !== 13 || content === '') return;
    // console.log(content);

    this.setState({
      todos: [{ id: this.generateId(), content, completed: false }, ...this.state.todos,]
    });
    this.inputRef.current.value = '';
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

  changeNav = id => {
    //  console.log([...this.nav.current.children]);
    [...this.nav.current.children].forEach(navItem => {
      navItem.classList.toggle('active', navItem.id === id)
    });
    this.setState({
      navState: id
    }, () => { console.log(this.state) })
  }

  render() {
    const _todos = this.state.todos.filter(({ completed }) => this.state.navState === 'active' ? !completed : this.state.navState === 'all' ? true : completed)
    return (
      <>
        <div className="container">
          <h1 className="title">Todos</h1>
          <div className="ver">1.0</div>

          <input className="input-todo" placeholder="What needs to be done?" ref={this.inputRef} autoFocus onKeyDown={this.addTodo} />
          <ul ref={this.nav} className="nav" onClick={({ target }) => this.changeNav(target.id)}>
            <li id="all" className="active">All</li>
            <li id="active">Active</li>
            <li id="completed">Completed</li>
          </ul>

          <ul className="todos">
            {_todos.map(todo => (
              <li key={uuid.v4()} id={todo.id} className="todo-item">
                <input className="custom-checkbox" id={`ck-${todo.id}`} type="checkbox" checked={todo.completed ? 'checked' : ''} onChange={() => this.toggleTodo(todo.id)} />
                <label htmlFor={`ck-${todo.id}`}>{todo.content}</label>
                <i className="remove-todo far fa-times-circle" onClick={() => this.removeTodo(todo.id)}></i>
              </li>
            )
            )}
          </ul>

          <div className="footer">
            <div className="complete-all">
              <input className="custom-checkbox" type="checkbox" id="ck-complete-all" onChange={({ target }) => this.toggleAll(target.checked)} />
              <label htmlFor="ck-complete-all">Mark all as complete</label>
            </div>

            <div className="clear-completed">
              <button className="btn" onClick={this.removeAll}>Clear completed (<span className="completed-todos">{this.state.todos.filter(todo => todo.completed).length}</span>)</button>
              <strong className="active-todos">{this.state.todos.filter(todo => !todo.completed).length}</strong> items left
      </div>
          </div>
        </div>
      </>
    )
  }




}
export default TodoClassv1;