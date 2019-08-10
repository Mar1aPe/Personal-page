import React from 'react';
import './styles/app.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects';
import Stack from './pages/Stack';
import Contact from './pages/Stack';


function App() {
  return (
    <Router>
    <div className='mainPage'>
    
     <Route path='/' exact component={Home}/>
     <Route path='/about' component={About}/>
     <Route path='/stack' component={Stack}/>
     <Route path='/projects' component={Projects}/>
     <Route path='/contact' component={Contact}/>
     
    </div>
    </Router>
  );
}

export default App;
