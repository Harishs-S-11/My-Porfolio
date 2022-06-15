import './index.scss'

import React from 'react'
import LogoR from '../../../images/harish.svg.png'
import LogoB from '../../../images/harish.outlin.svg.png'
import LogoC from '../../../images/harish.outlin2.svg.png'




const Logo = () => {
  return (
    <div className='logo-container'>
        <img className='solid-logo' src={LogoR} alt="H" />
        <img className='logo-animate' src={LogoB} alt="O" />
        <img className='logo-animate2' src={LogoC} alt="T" />

    </div>
  )
}

export default Logo
