
import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nsv/Nav';
import About from './components/about/About'
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Portfolio from './components/portfoiio/Portfolio.jsx';
import Testimonials from './components/testimonals/Testimonals';
import Contact from './components/contacts/Contacts';
import Footer from './components/footer/Footer';





const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Skills/>
      
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />

    </div>
  )
}

export default App