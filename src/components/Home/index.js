import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['W','o','l','f','g','a','n','g']
  const jobArray = ['R','e','a','c','t',' ','d','e','v','e','l','o','p','e','r','.']

  // useEffect(() => {
  //   return setTimeout(() => {
  //   setLetterClass('text-animate-hover')
  // }, 4000)
  // }, [])

  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
          <span className={letterClass}>H</span> 
          <span className={`${letterClass} _ 12`}>i,</span> 

          <br />
          <span className={`${letterClass} _ 13`}>I</span> 
          <span className={`${letterClass} _ 14`}>'m_</span> 
          {/* <img src={LogoTitle} alt="developer"/> */}
          <AnimatedLetters 
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}  
          />
          <br />
          <AnimatedLetters 
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}  
          />
          </h1>
          <h2>MERN Developer / Frontend Intermediate</h2>
          <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  )
}

export default Home