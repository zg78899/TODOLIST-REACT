import React from 'react';
import { ITodo } from '../../types/Todo';

type Props = {
  todos: ITodo[],
  removeAll: () => void,
  toggledAll: (checked: boolean) => void,
}
const Footer = ({todos,removeAll,toggledAll}:Props) => {
  // console.log(props);
  const countCompleted =todos.filter(todo => todo.completed).length;
  const itemLeft = todos.filter(todo => !todo.completed).length;
  return (
    <div>
      <div className="footer">
        <div className="complete-all">
          <input className="custom-checkbox" type="checkbox" id="ck-complete-all" onChange={({target}) => toggledAll(target.checked)} />
          <label htmlFor="ck-complete-all">Mark all as complete</label>
        </div>
        <div className="clear-completed">
          <button className="btn" onClick={removeAll}>Clear completed (<span className="completed-todos">{countCompleted}</span>)</button>
          <strong className="active-todos">{itemLeft}</strong> items left
  </div>ㅌ
      </div>
    </div>
  )

}
export default Footer;