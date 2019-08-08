import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const Main = () => <h1>o mnie</h1>
const About = () => <h1>o mnie</h1>
const Stack = () => <h1>o mnie</h1>
const Contact = () => <h1>o mnie</h1>

function App() {
  return (
    <Router>
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
     <Route path='/about' component={About}/>

     
    </div>
    </Router>
  );
}

export default App;
