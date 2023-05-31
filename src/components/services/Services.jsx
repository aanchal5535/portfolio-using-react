import './services.css'
import React from 'react';
import {FiCheck} from 'react-icons/fi';

const services = () => {
  return (
   <section id="services">
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container services_container">
      <article className="service">
        <div className="service_head">
          <h3>UI/UX Design</h3>
        </div>
        <ul className="service_list">
          <li><FiCheck className='service_list-icon'/>
          <p>Lorem Ipsum is simply dummy text of the printing .</p>
          </li>
          <li><FiCheck className='service_list-icon'/>
          <p>Lorem Ipsum is simply dummy text of the printing .</p>
          </li>
          <li><FiCheck className='service_list-icon'/>
          <p>Lorem Ipsum is simply dummy text of the printing .</p>
          </li>
          <li><FiCheck className='service_list-icon'/>
          <p>Lorem Ipsum is simply dummy text of the printing .</p>
          </li>
          <li><FiCheck className='service_list-icon'/>
          <p>Lorem Ipsum is simply dummy text of the printing .</p>
          </li>
        </ul>
      </article>
      <article className="service">
        <div className="service_head">
          <h3>Web Devlopment</h3>
        </div>
        <ul className="service_list">
          <li><FiCheck className='service_list-icon'/>
          <p>Lorem Ipsum is simply dummy text of the printing .</p>
          </li>
          <li><FiCheck className='service_list-icon'/>
          <p>Lorem Ipsum is simply dummy text of the printing .</p>
          </li>
          <li><FiCheck className='service_list-icon'/>
          <p>Lorem Ipsum is simply dummy text of the printing .</p>
          </li>
          <li><FiCheck className='service_list-icon'/>
          <p>Lorem Ipsum is simply dummy text of the printing .</p>
          </li>
          <li><FiCheck className='service_list-icon'/>
          <p>Lorem Ipsum is simply dummy text of the printing .</p>
          </li>
          <li><FiCheck className='service_list-icon'/>
          <p>Lorem Ipsum is simply dummy text of the printing .</p>
          </li>
          <li><FiCheck className='service_list-icon'/>
          <p>Lorem Ipsum is simply dummy text of the printing .</p>
          </li>
          
        
          
        </ul>
      </article>
      <article className="service">
        <div className="service_head">
          <h3>Content Creation</h3>
        </div>
        <ul className="service_list">
          <li><FiCheck className='service_list-icon'/>
          <p>Lorem Ipsum is simply dummy text of the printing .</p>
          </li>
          <li><FiCheck className='service_list-icon'/>
          <p>Lorem Ipsum is simply dummy text of the printing .</p>
          </li>
          <li><FiCheck className='service_list-icon'/>
          <p>Lorem Ipsum is simply dummy text of the printing .</p>
          </li>
          <li><FiCheck className='service_list-icon'/>
          <p>Lorem Ipsum is simply dummy text of the printing .</p>
          </li>
          <li><FiCheck className='service_list-icon'/>
          <p>Lorem Ipsum is simply dummy text of the printing .</p>
          </li>
          
        </ul>
      </article>
    </div>
   </section>
  )
}

export default services
