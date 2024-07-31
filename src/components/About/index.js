// import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faNodeJs,
  faNode
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
const About = () =>{
  const [letterClass , setLetterClass] = useState('text-animate');
  return(
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters 
          letterClass={letterClass}
          strArray={['A','B','O','U','T',' ','M','E']}
          idx={15 }

          />
        </h1>
        <p>
        I'm a very ambitious front-end developer looking for a role in an
        established IT company with the opportunity to work with the latest
        technologies on challenging and diverse projects.
        </p>

        <p align="LEFT">
          I'm an optimistic person who doesnt think an obstacle as a barrage but
          as an opportunity to think the solution out of the box! 
        </p>

        <p>
          To define myself in few lines, i'd say im a person who just likes to 
          watch over my pets and always open to go on roadtrips!!!
        </p>
      </div>

      <div className="stage-cube-cont">
          <div className="cubespinner">
             <div className="face1">
               <FontAwesomeIcon icon={faNode} color="#DD0031" />
             </div>
             <div className="face2">
               <FontAwesomeIcon icon={faHtml5} color="#F06529" />
             </div>
             <div className="face3">
               <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
             </div>
             <div className="face4">
               <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
             </div>
             <div className="face5">
               <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
             </div>
             <div className="face6">
               <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
             </div>
           </div>
         </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About;