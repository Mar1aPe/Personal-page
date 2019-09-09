import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Navigation extends Component {

  componentDidMount() {
    $(".cosmicNavi").click(function () {
      $(this).toggleClass("active");
      $(".burger").toggleClass("show");
    });
  }

  render() {
    return (

      <div className='cosmicNavi'>
        <div id="container">
          <div id="burger">
            <div className="bun top"></div>
            <div className="filling"></div>
            <div className="bun bottom"></div>
          </div>
        </div>

        <nav className='burger'>
          <ul>
            <li>
              <Link exact to='/'>Home</Link>
            </li>
            <li className='green'>
              <Link to='/about' >About me</Link>
            </li>

            <li className='red'>
              <Link to='/stack' >Stack</Link>
            </li>

            <li className='yellow'>
              <Link to='/projects' >Projects</Link>
            </li>
            <li className='purple'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>


      </div>
    );
  }
}

export default Navigation;