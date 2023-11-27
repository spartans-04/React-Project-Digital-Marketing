import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

import './header.css'

const Header = () => {
   return (
      <div className="transformer__header section__padding" id="home">
         <div className="transformer__header-content">
            <h1 className="gradient__text">Need To Powerup your Brand ?        So Here We Are ;-)</h1>
            <p>Marketing is no longer about selling products. It's about telling stories  We Bring You To The next Gen Platform Of Digital Marketing Beyond Your Imagination. </p>

            <div className="transformer__header-content__input">
               <input type="email" placeholder="Enter Your Email" />
               <button type="button">Get Started</button>
            </div>

            <div className="transformer__header-content__people">
               <img src={people} alt="transformer people" />
               <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
         </div>
         <div className="transformer__header-image">
            <figure>
               <img src={ai} alt="transformer ai" />
            </figure>
         </div>
      </div>
   )
}

export default Header
