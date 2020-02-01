import React from 'react';
import {INavs} from '../../types/Nav';

type Props = {
  navs:INavs[],
  change:(id:string)=>void
}


const Navigation = ({navs,change}:Props) => {
  console.log(navs);
  // console.log(props);

  const navItems =
    navs.map((navItem) => (
      <li
        key={navItem.id}
        id={navItem.id}
        className={navItem.toggle ? 'active' :undefined }
        onClick={()=>change(navItem.id)}
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