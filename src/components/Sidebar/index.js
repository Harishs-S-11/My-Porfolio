import './index.scss';
import {Link, NavLink} from 'react-router-dom'
import React from 'react'
import LogoH from '../../images/HarishT.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'





const Sidebar = () => {
  return (
    <div className="nav-bar">
        <Link className='logo' to='/'>
            <img src={LogoH} alt='logoo' />
            {/* <img className='sub-logo' src={LogoN} alt='harish' /> */}
        </Link>

        <nav>
            <NavLink exact="true"  to="/">
                    <FontAwesomeIcon icon={faHome} color="#787A91"/>
            </NavLink>
            <NavLink exact="true"  to="/about" className='about-link'>
                    <FontAwesomeIcon icon={faUser} color="#787A91"/>
            </NavLink>
            <NavLink exact="true"  to="/contact" className='contact-link'>
                    <FontAwesomeIcon icon={faEnvelope} color="#787A91"/>
            </NavLink>
        </nav>

        <ul>
            <li>
              <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/harish-s-770b89172/'>
                  <FontAwesomeIcon icon={faLinkedin} color='#000000'/>
              </a>
            </li>

            <li>
              <a target="_blank" rel='noreferrer' href='https://github.com/Harishs-S-11'>
                  <FontAwesomeIcon icon={faGithub} color='#000000'/>
              </a>
            </li>

            <li>
              <a target="_blank" rel='noreferrer' href='https://www.instagram.com/t.challa_._/'>
                  <FontAwesomeIcon icon={faInstagram} color='#000000'/>
              </a>
            </li>


        </ul>
    </div>
  )
}

export default Sidebar;
