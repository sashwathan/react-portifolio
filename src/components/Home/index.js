import { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
// import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logoscale'
import './index.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'


const Home = () =>{
    // useEffect(() =>{
    //     return setTimeout(()=>{
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, [])

    const [letterClass, setLetterClass]= useState('text-animate')

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();




    const nameArray = ['a','s','h','w','a','t','h','a','n']
    const jobArray = [
            'w',
             'e',
             'b',
             ' ',
             'd',
             'e',
             'v',
             'e',
             'l',
             'o',
             'p',
             'e',
             'r',
             '.',
           ]

    return(

        <div className="container home-page">
            <div className="text-zone">
                <h1>HI,<br/> I'm 
                <img src={LogoTitle} alt='developer'/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                {/* ashwathan */}
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                {/* Web developer */}
                </h1>
                <h2>Frontend Developer / JS / Backend</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                
            </div>
            <Logo/>
        </div>
    )
}

export default Home;