import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import { Animated } from "react-animated-css";
import Fade from 'react-reveal/Fade';

class Contact extends Component {
    render() {

        return (

            <div className='testNavDiv'>

                <Navigation />



                <div className='about'>
                    <Animated animationIn='fadeIn' animationInDuration={3000}>
                        <h1>Contact</h1>
                    </Animated>
                    <div className='iconsDiv'>
                        <Animated animationIn='zoomIn fadeIn' animationInDelay='1000' animationInDuration={3000} animateOnMount='false'>
                            <Fade bottom>
                                <span>
                                    <i class="fas fa-at"></i>
                                </span>
                                <span>
                                    <i class="fas fa-phone-alt"></i>
                                </span>
                                <span>
                                    <i class="fab fa-linkedin"></i>
                                </span>
                                <span>
                                    <i class="devicon-github-plain-wordmark"></i>
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