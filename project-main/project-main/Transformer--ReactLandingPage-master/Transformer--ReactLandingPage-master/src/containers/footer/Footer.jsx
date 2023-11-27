import React from 'react';
import transformerLogo from '../../assets/Transformerlogo.png';
import './footer.css'
const Footer = () => {
   return (
      <div className="transformer__footer section__padding">
         <div className="transformer__footer-heading">
            <h1 className="gradient__text">Do you want to promote Your Brand  before others</h1>
         </div>

         <div className="transformer__footer-btn">
            <button type="button">Request Early Access</button>
         </div>

         <div className="transformer__footer-links">
            <div className="transformer__footer-links_logo">
               <figure>
                  <img src={transformerLogo} alt="Footer logo" />
                  <address>
                     <p>Example, All Rights Reserved</p>
                  </address>
               </figure>
            </div>

            <div className="transformer__footer-links_div">
               <h4>Links</h4>
               <ul>
                  <li><a href="#">Overons</a></li>
                  <li><a href="#">Social Media</a></li>
                  <li><a href="#">Counters</a></li>
                  <li><a href="#">Contact</a></li>
               </ul>
            </div>

            <div className="transformer__footer-links_div">
               <h4>Company</h4>
               <ul>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Contact</a></li>
               </ul>
            </div>

            <div className="transformer__footer-links_div">
               <h4>Get in touch</h4>
               <h4>Coimbatore,India</h4>
               <h4>+91 7010565456</h4>
               <h4><a href="email">madhav@2004.com</a></h4>
            </div>
         </div>
         <div className="transformer__footer-copyright">
            <p>© 2021 TRANSFORMER. All rights reserved.</p>
         </div>
      </div>
   )
}
export default Footer
