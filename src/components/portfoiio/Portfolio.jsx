import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/Image1.jpg'
import IMG2 from '../../assets/Image2.png'
import IMG3 from '../../assets/Image3.jpg'
import IMG4 from '../../assets/Image4.png'
import IMG5 from '../../assets/Image5.jpg'
import IMG6 from '../../assets/Image6.png'
import IMG7 from '../../assets/scene.jpg'

const data=[
  {id:1,
  image:IMG1,
  title: 'SignUp-LogIn Form ',
  github: 'https://github.com/aanchal5535/signup-login_using_react',
  
  },
  {id:2,
    image:IMG2,
    title: 'Tip Calculator',
    github: 'https://github.com/aanchal5535/tip-calculator_react',

  },
  {id:3,
    image:IMG3,
    title: 'Weather app',
    github: 'https://github.com/aanchal5535/weather_app',
    
  },
  {id:4,
    image:IMG4,
    title: 'Advertisement Template For Lamp',
    github: 'https://github.com/aanchal5535/lamp_ad',

  },
  {id:5,
    image:IMG5,
    title: 'ToDo List  App',
    github: 'https://github.com/aanchal5535/todolist_react',
    
  },
  {id:6,
    image:IMG6,
    title: 'Gym Website',
    github: "https://github.com/aanchal5535/gym_website",

  },
  {id:7,
    image:IMG7,
    title: 'Travel Website',
    github: "https://github.com/aanchal5535/travel_react/tree/main",

  },
 
]





const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
            <article key={id} className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className="portfolio_item-cta">
          <a href={github} className='btn btn-primary'>GitHub</a>
         </div>
        
        </article>
            )
          })
        }
        <div>
       <a href="https://github.com/aanchal5535" className='btn btn-primary'>See More</a>
       </div>>
      </div>
    </section>
  )
}

export default portfolio
