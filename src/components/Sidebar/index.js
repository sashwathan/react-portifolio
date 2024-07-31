import './index.scss'
// import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
 faLinkedin,
   faGithub,
   faYoutube,
   faSkype,
 } from '@fortawesome/free-brands-svg-icons'

import {
  faHome,
   faUser,
   faEnvelope,
   faSuitcase,
   faBars,
   faClose,
 } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { useEffect } from 'react'



const Sidebar = () =>{



    return(
       <div className='nav-bar'>
        <Link className='logo' to='/'>
        <img src={LogoS} />
        {/* <img className='sub-logo' src={LogoSubtitle} /> */}
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
            <FontAwesomeIcon icon={faBars} color='#4d4d4e' />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>

        </nav>

        <ul>
            <li>
                <a
                 href="https://www.linkedin.com/in/sashwathan-s-338a6b23b/"
                          target="_blank"
                              rel="noreferrer"
                ><FontAwesomeIcon className='anchor-icon' icon={faLinkedinIn} color='#4d4d4e' /></a>
            </li>

            <li>
                <a
                 href="https://github.com/sashwathan"
                 target="_blank"
                     rel="noreferrer"
                ><FontAwesomeIcon className='anchor-icon' icon={faGithub} color='#4d4d4e' /></a>
            </li>
        </ul>

       </div>
    )
}

export default Sidebar;