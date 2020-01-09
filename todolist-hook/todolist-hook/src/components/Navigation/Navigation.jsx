import React from 'react';

const Navigation = (props) => {
  console.log(props.navs);
  console.log(props);

  const navItems =
    props.navs.map((navItem) => (
      <li
        key={navItem.id}
        id={navItem.id}
        className={navItem.toggle ? 'active' : null}
        onClick={()=>props.changeNav(navItem.id)}
      >
        {navItem.id}
      </li>
    ))
  return (
    <div>
      <ul className="nav">
        {navItems}
      </ul>
        
    </div>
  )

}
export default Navigation;