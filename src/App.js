import React, { Component } from 'react';
import './styles/app.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects';
import Stack from './pages/Stack';
import Contact from './pages/Contact';
import ErrorPage from './pages/Error Page';
import './components/loader';



class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>

        <div className='mainPage'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/stack' component={Stack} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
            <Route path='/404' exact component={ErrorPage} />
            <Redirect to='/404' />
          </Switch>
        </div>
      </Router>



    );
  }
}

export default App;
