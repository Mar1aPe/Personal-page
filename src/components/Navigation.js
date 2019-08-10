import React from 'react';
import {Link} from 'react-router-dom'

const Navigation = () => {
    return ( 
        <nav>
    <ul>
    <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='about'>O mnie</Link>
      </li>
      <li>
        <Link to='/stack'>Stack</Link>
      </li>
      <li>
        <Link to='/projects'>Projekty</Link>
      </li>
      <li>
        <Link to='/contact'>Kontakt</Link>
      </li>
    </ul>
  </nav>
     );
}
 
export default Navigation;