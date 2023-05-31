import React from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {AiOutlineWhatsApp} from 'react-icons/ai';

const contacts = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>aanchalsubedi005@gmail.com</h5>
            <a href='mailto:aanchalsubedi005@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <BsMessenger className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Aanchal Subedi</h5>
            <a href='https://m.me/aanchal.subedi.967' target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <AiOutlineWhatsApp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href='https://api.whatsapp.com/send?phone=+123456789' target='_blank'>Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email ' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
      
    
  )
}

export default contacts;
