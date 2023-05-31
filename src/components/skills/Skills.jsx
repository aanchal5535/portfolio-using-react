import React from 'react';
import './skills.css';
import {BsFillPatchCheckFill} from 'react-icons/bs';
const Skills = () => {
  return (
    <section id='skills'>
        <h2>What are My Skills:</h2>
        <div className="container my-skills">
            <div className="container skills_frontend">
                <h3>Frontend Devlopment</h3>
                <div className="skills-content">
                    <article className='skills-details'> 
                    <h4>HTML</h4>
                     <span class="bar"><span class="html"></span></span>
                    </article>
                    <article className='skills-details' >
                    <h4>CSS</h4>
                    <span class="bar"><span class="css"></span></span>
                    
                    </article>
                    <article className='skills-details'>
                    <h4>JavaScript</h4>
                    <span class="bar"><span class="javascript"></span></span>
                     
                    </article>
                    <article className='skills-details'>
                    <h4>Bootstrap</h4>
                    <span class="bar"><span class="bootstrap"></span></span>
                     
                    </article>
                    <article className='skills-details'>
                     <h4>React</h4>
                     <span class="bar"><span class="react"></span></span>
                    </article>

                </div>
            </div>
            <div className="container skills_backend">
            <h3>Backend Devlopment</h3>
                <div className="skills-content">
                    <article className='skills-details'>
                    
                     <h4>MySql</h4>
                     <span class="bar"><span class="sql"></span></span>
                    </article>
                    <article className='skills-details'>
                     <h4>Python</h4>
                     <span class="bar"><span class="python"></span></span>
                    </article>
                    <article className='skills-details'>
                    <h4>GitHub</h4>
                     <span class="bar"><span class="github"></span></span>
                    </article>
                    

                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
