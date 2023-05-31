import React from 'react';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillDribbbleCircle}from 'react-icons/ai'

const headesocial = () => {
  return (
    <div className='header-socials'>
        <a href='https://linkedin.com' target="_blank"><AiFillLinkedin/></a>
        <a href='https://github.com' target="_blank"><AiFillGithub/></a>
        <a href='https://dribble.com' target="_blank"><AiFillDribbbleCircle/></a>
      
    </div>
  )
}

export default headesocial
