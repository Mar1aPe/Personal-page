import React from 'react';
import {Link} from 'react-router-dom'
const Home = () => {
    return ( 
        <div className='home'>
        <h1>Maria Patelska</h1>
    <h2>Portfolio</h2>
   
    
    
    <nav>
    <ul>
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
  </div>
     );
}
 
export default Home;