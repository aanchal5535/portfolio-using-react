import React from 'react';
import './testimonals.css';
import AVTR1 from'../../assets/avatar1.jpg';
import AVTR2 from'../../assets/avatar2.jpg';
import AVTR3 from'../../assets/avatar3.jpg';
import AVTR4 from'../../assets/avatar4.jpg';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


const data=[
  {
    avatar:AVTR1,
    name:'Eric Matthew',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nulla distinctio eaque itaque cum velit ex minima voluptate expedita.Mollitia cum placeat porro quo excepturi debitis aliquid tempora culpa quis?'
  },
  {
    avatar:AVTR2,
    name:'Eric Matthew',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nulla distinctio eaque itaque cum velit ex minima voluptate expedita.Mollitia cum placeat porro quo excepturi debitis aliquid tempora culpa quis?'
  },
  {
    avatar:AVTR3,
    name:'Eric Matthew',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nulla distinctio eaque itaque cum velit ex minima voluptate expedita.Mollitia cum placeat porro quo excepturi debitis aliquid tempora culpa quis?'
  },
  {
    avatar:AVTR4,
    name:'Eric Matthew',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nulla distinctio eaque itaque cum velit ex minima voluptate expedita.Mollitia cum placeat porro quo excepturi debitis aliquid tempora culpa quis?'
  },
]


const Testimonals = () => {

  return (
   <section id="testimonals">
    <h5>Review From clients</h5>
    <h2>Testimonals</h2>

    <Swiper className="container testimonals_container" 
     modules={[ Navigation]}
     spaceBetween={40}
     slidesPerView={1}
     navigation={{ clickable: true }}
     >
      {
        data.map(({avatar,name,review},index)=>{
          
  return (
          <SwiperSlide  key={index}className="testimonal">
            <div className="client_avatar">
              <img src={avatar} alt='Avatar'/>

            </div>
            <h5 className="client_name">{name}</h5>
            <small className="client_review">{review}</small>
          </SwiperSlide>
          )
        })
      }  
    </Swiper>
    </section>
    )
  } 


export default Testimonals;
