import React from 'react';
import {Link} from 'react-router-dom'
import {Animated} from "react-animated-css";


const Home = () => {
    return ( 
        <div className='home'>
        <Animated animationIn='fadeIn' animationInDuration='3000'>
        <h1>Maria Patelska</h1>
        </Animated>
        <Animated animationIn='fadeIn' animationInDelay='500' animationInDuration='6000'>
        <h2>Portfolio</h2>
        </Animated>
        
   
  
    
    <nav>
    <ul>
      <li>
        <Link to='/about'>About me</Link>
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