/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Navigation from '../components/Navigation';
import { Animated } from "react-animated-css";
import Fade from 'react-reveal/Fade';
import memeIcon from '../images/derpina.png';
import tetris from '../images/tetris.png';

const Projects = () => {


    return (

        <div> <Navigation />
            <div className='testNavDiv'>





                <div className='about'>
                    <Animated animationIn='fadeIn' animationInDuration={3000}>
                        <h1>Projects</h1>
                    </Animated>
                    <div className='contactSection'>
                        <Animated animationIn='zoomIn fadeIn' animationInDelay='1000' animationInDuration={3000} animateOnMount='false'>
                            <Fade bottom>

                                <span className='contactDiv'>
                                    <img src={memeIcon} alt="derpina" />
                                    <br />
                                    MEME GENERATOR
                                    <br />
                                    <a href="https://mar1ape.github.io/Meme-Generator/" target="_blank" >Go to website</a>
                                    <br />
                                    <a href="https://github.com/Mar1aPe/Meme-Generator" target="_blank">Check the code</a>
                                </span>
                                <span className='contactDiv'>
                                    <img src={tetris} alt="tetris" />
                                    <br />
                                    TETRIS
                                    <br />
                                    <a href="https://mar1ape.github.io/Tetris/" target="_blank">Go to website</a>
                                    <br />
                                    <a href="https://github.com/Mar1aPe/Tetris" target="_blank">Check the code</a>

                                </span>



                            </Fade>

                        </Animated>


                    </div>
                </div>
            </div>

        </div>

    );
}


export default Projects;