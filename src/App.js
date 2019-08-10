import React from 'react';
import './styles/app.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects';
import Stack from './pages/Stack';
import Contact from './pages/Stack';

// const Home = () => <h1>homeeeeeee</h1>
// const About = () => <h1>o mnie</h1>
// const Stack = () => <h1>stack</h1>
// const Projects = () => <h1>projekty</h1>
// const Contact = () => <h1>kontakt</h1>

function App() {
  return (
    <Router>
    <div>
    <ul>
      <li>
      <Link to='/'>Home</Link>
      </li>
    </ul>
    {/* <section className="language">flaga flaga</section>
    <section className="content">Maria Patelska
    PORTFOLIO
    </section> */}
{/* 
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
     </nav> */}
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
