import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
const Home = () => {
    return ( 
        <div>
        <section className="language">flaga flaga</section>
    <section className="content">Maria Patelska
    PORTFOLIO
    </section>
    
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