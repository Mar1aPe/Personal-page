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
        <Link to='about'>About me</Link>
      </li>
      <li>
        <Link to='/stack'>Technology Stack</Link>
      </li>
      <li>
        <Link to='/projects'>Projects</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
    </ul>
  </nav>
  </div>
     );
}
 
export default Home;