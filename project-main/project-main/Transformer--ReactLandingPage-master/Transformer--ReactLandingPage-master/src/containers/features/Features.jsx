import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData =[
   {
      title:'Set SMART goals',
      text:'For many small businesses and beginner digital marketers, getting started with digital marketing can be difficult. However, you can create an effective digital marketing strategy to increase brand awareness, engagement, and sales by using the following steps as your starting point.'
   },

   {
      title:'Identify your audience',
      text:'Setting specific, measurable, achievable, relevant, and timely (SMART) goals is crucial for any marketing strategy. While there are many goals you may want to achieve, try to focus on the ones that will propel your strategy forward instead of causing it to remain stagnant.'
   },

   {
      title:'Select your digital marketing channels'  ,
      text:'Before starting any marketing campaign, it’s best to identify your target audience. Your target audience is the group of people you want your campaign to reach based on similar attributes, such as age, gender, demographic, or purchasing behavior. Having a good understanding of your target audience can help you determine which digital marketing channels to use and the information to include in your campaigns.'
   },

   {
      title:'Refine your marketing efforts',
      text:'A budget ensures you’re spending your money effectively towards your goals instead of overspending on digital marketing channels that may not provide the desired results. Consider your SMART goals and the digital channel you’re planning to use to create a budget.'
   }
]

const Features = () => {
   return (
      <div className="transformer__features section__padding" id="features">
         <div className="transformer__features-heading">
            <h1 className="gradient__text">
            The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
            </h1>
            <p>Request Early Access to Get Started</p>
         </div>

         <div className="transformer__features-container">
            {featuresData.map((item,index)=>(
               <Feature title={item.title} text={item.text} key={item.title +index}></Feature>
            ))}

         </div>
      </div>
   )
}

export default Features
