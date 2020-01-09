import React from 'react';

const Footer=(props)=> {
  // console.log(props);
  const countCompleted =props.todos.filter(todo => todo.completed).length;
   const itemLeft = props.todos.filter(todo => !todo.completed).length;
  
  
  return (
    <div>
      <div className="footer">
          <div className="complete-all">
            <input className="custom-checkbox" type="checkbox" id="ck-complete-all" onChange={({ target }) => props.toggleAll(target.checked)} />
            <label htmlFor="ck-complete-all">Mark all as complete</label>
          </div>

          <div className="clear-completed">
            <button className="btn" onClick={props.removeAll}>Clear completed (<span className="completed-todos">{countCompleted}</span>)</button>
            <strong className="active-todos">{itemLeft}</strong> items left
  </div>
        </div>
    </div>
  )

}
export default Footer;