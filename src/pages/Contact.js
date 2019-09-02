import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import { Animated } from "react-animated-css";
import Fade from 'react-reveal/Fade';
import $ from 'jquery';

class Contact extends Component {



    render() {
        $(".contactDiv").on("touchstart", function () {
            $('a').show();
        });

        return (

            <div className='testNavDiv'>

                <Navigation />



                <div className='about'>
                    <Animated animationIn='fadeIn' animationInDuration={3000}>
                        <h1>Contact</h1>
                    </Animated>
                    <div className='contactSection'>
                        <Animated animationIn='zoomIn fadeIn' animationInDelay='1000' animationInDuration={3000} animateOnMount='false'>
                            <Fade bottom>
                                <span className='contactDiv'>

                                    <i class="fas fa-at"></i>
                                    <br />

                                    <a href="mailto:adresmarii@gmail.com"> adresmarii@gmail.com </a>
                                </span>
                                <span className='contactDiv'>
                                    <i class="fas fa-phone-alt"></i>
                                    <br />
                                    <a href="tel:+48600044456"> +48 600044456</a>
                                </span>
                                <span className='contactDiv'>

                                    <i class="fab fa-linkedin"></i>
                                    <br />
                                    <a href="https://www.linkedin.com/in/maria-p-25a345187/">Go to LinedIn</a>
                                </span>
                                <span className='contactDiv'>
                                    <i class="fab fa-github"></i>
                                    <br />
                                    <a href="http://github.com/Mar1aPe">Go to GitHub</a>

                                </span>



                            </Fade>

                        </Animated>


                    </div>
                </div>
            </div>


        );
    }
}

export default Contact;