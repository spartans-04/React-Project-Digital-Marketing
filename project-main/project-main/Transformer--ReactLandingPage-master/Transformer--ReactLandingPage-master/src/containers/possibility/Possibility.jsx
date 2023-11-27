import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css'

const Possibility = () => {
   return (
      <div className="transformer__possibility section__padding" id="possibility">
         <div className="transformer__posssibility-image">
            <figure>
               <img src={possibilityImage} alt="possobility"/>
            </figure>
         </div>
         <div className="transformer__posssibility-content">
            <h4>Lead code Executive : +91-7010565456</h4>
            <h1 className="gradient__text">“Advertising brings in the customers, but it is your job to keep them buying from you.” – Chet Holmes.</h1>
            <p>“Our jobs as marketers are to understand how the customer wants to buy and help them to do so.” – Bryan Eisenberg</p>
            <h4>Come Join Us lets Buils Our Empire</h4>
         </div>
         
      </div>
   )
}


export default Possibility
