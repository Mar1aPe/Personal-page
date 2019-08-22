import React from 'react';
import {Link} from 'react-router-dom'
import {Animated} from "react-animated-css";


const Home = () => {
    return ( 
        <div className='home'>
        <div className="name"> 
        <Animated animationIn='fadeIn' animationInDuration='3000'>
        <h1>Maria Patelska</h1>
        </Animated>
        <Animated animationIn='fadeIn' animationInDelay='500' animationInDuration='6000'>
        <h2>Front-End Developer</h2>
        </Animated>
        </div>
   
  <div className="links"> 
    
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
  </div>
     );
}
 
export default Home;