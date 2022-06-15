import './index.scss';
import React,{useEffect, useState} from 'react'
import AnimatedLetters from '../AnimatedLetters/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
// import BarLoader from '@bit/davidhu2000.react-spinners.bar-loader';
// import Loader from "react-loader-spinner";

const About = () => {

    const [letterClass,setLetterClass]= useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
         return setLetterClass('text-animate-hover')
       },3000)
     },[])


  return (
      <>
    <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
                   </h1>
                   <p>
                    I'm a very ambitious Front-End developer looking for a role in an
                    established organization with the opportunity to showcase my skills and
                    to work on challenging and diverse projects.
                   </p>

                   <p>
                     I'm a confident, naturally curious person who perpetually works on
                     improving skills and takes one step at a time.
                   </p>
                   <p>
                    I'd summarise myself as a person who goes "All In" for the work I'm assigned to and apart from Web Development, I'm a 3D modeler and
                    a 3D Printing Specialist experienced in FDM Technology, a sports fanatic and an intermediate Gamer.
                   </p>
            </div>

        <div className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                </div>
                <div className="face3">
                  {/* <FontAwesomeIcon icon={faReact} color="#5ED4F4"/> */}
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                </div>
            </div>
        </div>
    </div>

    <Loader type="pacman" />

    </>
  )
}

export default About;
