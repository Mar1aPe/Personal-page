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
          <p>Hi, I'm Maria, an engineer by profession and a programmer by passion. <br />
            Aspiring Front-End Developer diving into web technologies and
            programming languages.
            In the near future I would like to develop in writing mobile applications as
well. <br /> I program in front-end technologies, I like React.js especially. <br />
            I believe that everyday practice is the key to self-development, and programming possibilities are endless, which is why I like it so much.<br />
            I graduated from University of Economics in Poznań with a Master's - Engineer degree in the field of Commodity Science but have been a Product Manager for last few years in the field of electromagnetic components. <br />
            I find technical knowledge pleasant and accessible.
Learning new programming languages and tools became an addicting and
satisfying process for me.
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





