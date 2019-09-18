import React from 'react';
import Navigation from '../components/Navigation';
import { Animated } from "react-animated-css";
import Fade from 'react-reveal/Fade';


const Stack = () => {


    return (

        <div className='testNavDiv'>

            <Navigation />



            <div className='about'>
                <Animated animationIn='fadeIn' animationInDuration={3000}>
                    <h1>Technology Stack</h1>
                </Animated>
                <div className='iconsDiv'>
                    <Animated animationIn='zoomIn fadeIn' animationInDelay='1000' animationInDuration={3000} animateOnMount='false'>
                        <Fade bottom>
                            <span>
                                <i class="devicon-html5-plain-wordmark"></i>
                            </span>
                            <span>
                                <i class="devicon-css3-plain-wordmark"></i>
                            </span>
                            <span>
                                <i class="devicon-javascript-plain"></i>
                            </span>
                            <span>
                                <i class="devicon-jquery-plain-wordmark"></i>
                            </span>
                            <span>
                                <i class="devicon-sass-original"></i>
                            </span>
                            <span>
                                <i class="devicon-react-original-wordmark"></i>
                            </span>
                            <span>
                                <i class="devicon-git-plain-wordmark"></i>
                            </span>

                            <h3>Learning...</h3>

                            <span><i class="devicon-nodejs-plain-wordmark"></i></span>
                            <span><i class="devicon-mongodb-plain-wordmark"></i></span>
                            <span><i class="devicon-express-original-wordmark"></i></span>
                            <span><i class="devicon-php-plain"></i></span>

                        </Fade>

                    </Animated>


                </div>
            </div>
        </div>


    );
}


export default Stack;