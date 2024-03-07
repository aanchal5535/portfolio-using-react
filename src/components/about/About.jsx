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
        Highly motivated and detail-oriented aspiring Frontend Developer with a strong foundation in web 
development technologies.
Seeking an opportunity to apply my skills and passion for creating user-friendly, responsive, and visually 
appealing websites.
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
  </section>
  )
}

export default about;
