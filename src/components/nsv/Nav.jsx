import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BsPersonWorkspace} from 'react-icons/bs';
import {RiServiceLine} from 'react-icons/ri';
import {AiOutlineContacts} from 'react-icons/ai';
import './nav.css';
import {useState} from 'react';



const Nav = () => {
  const [activeNav,setActiveNav]=useState('#')
  return (
   <nav>
    <a href='#' onClick={()=>setActiveNav('#')}  className={activeNav==='#' ? 'active':''}>Home</a>
    <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active':''}>About</a>
    <a href='#skills' onClick={()=>setActiveNav('#skills')} className={activeNav==='#skills' ? 'active':''}>Skills</a>
    <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio' ? 'active':''}>Portfolio</a>
    <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}>Contact</a>

   </nav>
  )
}

export default Nav;
