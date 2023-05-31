import React from 'react'
import './about.css'
import ME from'../../assets/me2.jpg'
import {FaAward} from 'react-icons/fa';
import{AiOutlineUsergroupAdd} from 'react-icons/ai';
import{AiOutlineProject} from 'react-icons/ai';


const about = () => {
  return (
  <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt='About Image'/>
        </div>
      </div>
    
      <div className="about-content">
        <div className="about-cards">
          <article className='about-card'>
           <FaAward className='about-icons'/>
           <h5>Experience</h5>
           <small>*******</small>
          </article>
          <article className='about-card'>
           <AiOutlineUsergroupAdd className='about-icons'/>
           <h5>Clients</h5>
           <small>*******</small>
          </article>
          <article className='about-card'>
           <AiOutlineProject className='about-icons'/>
           <h5>Projects</h5>
           <small>20+</small>
          </article>
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
  </section>
  )
}

export default about;
