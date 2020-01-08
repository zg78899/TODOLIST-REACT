import React,{useRef} from 'react';

const Navigation=(props)=> {
  console.log(props);
  const nav= useRef();
  
  return (
    <div>
       <ul ref={nav} className="nav" onClick={({target})=>props.changeNav(target.id,nav)}>
          <li id="all" className="active">All</li>
          <li id="active">Active</li>
          <li id="completed">Completed</li>
        </ul>
    </div>
  )

}
export default Navigation;