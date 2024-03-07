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
                    <ul className='skills-details'>
                        <li className='skill'>HTML</li>
                        <li className='skill'>CSS</li>
                        <li className='skill'>JavaScript</li>
                        <li className='skill'>ReactJS</li>
                        <li className='skill'>Next JS</li>
                        <li className='skill'>TypeScript</li>
                        <li className='skill'>Tailwind CSS</li>
                        <li className='skill'>BootStrap</li>
                    </ul>

                </div>
            </div>
            <div className="container skills_backend">
            <h3>Backend Devlopment</h3>
                <div className="skills-content">
                <ul className='skills-details'>
                        <li className='skill'>GitHub</li>
                        <li className='skill'>Python</li>
                        <li className='skill'>MySql</li>   
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
