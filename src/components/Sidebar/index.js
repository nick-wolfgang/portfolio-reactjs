import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from './../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'

function Sidebar() {
  return (
    <div className='nav-bar'>
        <Link className='logo' to="/">
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" className="home-link" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
          <li>
            <a 
              className='profile-links'
              target="_blank" 
              rel="noreferrer" 
              href='https://www.linkedin.com'>
              <FontAwesomeIcon icon={faLink} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a 
              className='profile-links'
              target="_blank" 
              rel="noreferrer" 
              href='https://www.github.com/nick-wolfang'>
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a 
              className='profile-links'
              target="_blank" 
              rel="noreferrer" 
              href='https://www.linkedin.com'>
              <FontAwesomeIcon icon={faDiscord} color="#4d4d4e" />
            </a>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar