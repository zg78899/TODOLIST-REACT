import React, { createRef } from 'react';

const Navigation =props=> {
  const nav =createRef();

  console.log(props);
  console.log(props.nav);
    return(
      <ul ref={nav} className="nav" onClick={({ target }) => props.changeNav(target.id, nav)}>
      <li id="all" className="active">All</li>
      <li id="active">Active</li>
      <li id="completed">Completed</li>
    </ul>
    )
  }


export default Navigation;