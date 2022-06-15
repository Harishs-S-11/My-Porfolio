import './index.scss'
import Logo from './Logo'
import LogoTitle from '../../images/H-dark.png'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'r', 'i', 's', 'h']
  const jobArray = [
    'F',
    'r',
    'o',
    'n',
    't',
    '-',
    'E',
    'n',
    'd',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>

            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
          </h1>
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h2>
          <h3>| Free Lancer | 3D Modeler | 3D Printing Specialist |</h3>

          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div>
          <Logo />
        </div>
      </div>
      <Loader type="pacman" />

    </>
  )
}

export default Home
