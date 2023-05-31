
import './header.css';
import CTA from './CTA';
import React from 'react';
import ME from'../../assets/me1.jpg';
import HeaderSocials from './headesocial';

const Header = () => {
  return (
    <header>
      
      <div className="container header_container">
        <h5 >Hello I'm</h5>
        <h2 >Aanchal Subedi.</h2>
        <h5 className="text-light">Frontend Devloper</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt=''/> 
        </div>
        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
