import React from 'react';
import Navigation from '../components/Navigation';
import { Animated } from "react-animated-css";
import Fade from 'react-reveal/Fade';

const About = () => {

  return (

    <div className='testNavDiv'>

      <Navigation />



      <div className='about'>
        <Animated animationIn='fadeIn' animationInDuration={3000}>
          <h1>About me</h1>
        </Animated>
        <Animated animationIn='fadeIn' animationInDelay={1000} animationInDuration={4000}>
          <p>Hi, I'm Maria, I program in front-end technologies, I like React.js especially. <br />
            I believe that everyday practice is the key to development, and programming possibilities are endless, which is why I like it so much.<br />
            I graduated from University of Economics in Poznań with a Master's degree in the field of Commodity Science. <br />
            Also, this year I am about to start postgraduate studies at the WSB in Poznań in the field of "Internet and mobile applications".<br />
            I started with frontend, but I'm definitely going into mobile application environment as well.<br />
            This won't be my first career switch, as I moved from being a Commodity Science (Chemistry Lab) Engineer to an Automation and Electronics Product Manager years ago, also after taking few years of education for that purpose, what I think, shows my flexibility and capability of setting my mind and efforts on completely new professional fields with a success.
          </p>

          <Fade bottom>
            <h1>Professional & Personal Skills</h1>
            <ul className='skills'>
              <li>Very good spoken and written English</li>
              <li>Effective communication</li>
              <li>Big-Picture Thinking</li>
              <li>Teamwork</li>
              <li>Open-mindedness</li>
              <li>Patience</li>
              <li>Problem solving</li>
              <li>Adaptability</li>
              <li>Willingness to learn</li>
            </ul>
          </Fade>


        </Animated>
      </div>
    </div>


  );
}


export default About;





