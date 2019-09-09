import React from 'react';
import Navigation from '../components/Navigation';
import { Animated } from "react-animated-css";

const About = () => {

  return (

    <div className='testNavDiv'>

      <Navigation />



      <div className='about'>
        <Animated animationIn='fadeIn' animationInDuration={3000}>
          <h1>About me</h1>
        </Animated>
        <Animated animationIn='fadeIn' animationInDelay={1000} animationInDuration={4000}>
          <p>Hi, I'm Maria, self-taught frontend developer. <br />
            I graduated from University of Economics in Poznań with a Master's degree in the field of Commodity Science. <br />
            Few months ago, just out of curiosity, I started to explore the topic of programming
            and after learning for several months, from absolute basics I can't imagine doing anything else now! <br />I just have to be a professional programmer!
            <br />I was fascinated by the enormity of possibilities, technology, and endless development prospects - for myself and applications. <br />
            I decided to take it to a serious level and spend most of my free time on exploring the subject. <br /> Also, this year I am about to start postgraduate studies at the WSB in Poznań in the field of "Internet and mobile applications".<br />
            I started with frontend, but I'm definitely going into mobile application environment as well.<br />
            This won't be my first career switch, as I moved from being a Commodity Science (Chemistry Lab) Engineer to an Automation and Electronics Product Manager years ago, also after taking few years of education for that purpose, what I think, shows my flexibility and capability of setting my mind and efforts on completely new professional fields with a success.
          </p>
        </Animated>
      </div>
    </div>


  );
}


export default About;





