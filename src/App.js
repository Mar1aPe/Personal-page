import React from 'react';
import './styles/App.scss';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const Home = () => <h1>home</h1>
const About = () => <h1>o mnie</h1>
const Stack = () => <h1>stack</h1>
const Projects = () => <h1>projekty</h1>
const Contact = () => <h1>kontakt</h1>

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
     <section>
     <Route path='/' exact component={Home}/>
     <Route path='/about' component={About}/>
     <Route path='/stack' component={Stack}/>
     <Route path='/projects' component={Projects}/>
     <Route path='/contact' component={Contact}/>
     </section>
    </div>
    </Router>
  );
}

export default App;
