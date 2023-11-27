import React from 'react'
import Feature  from '../../components/feature/Feature'
import './whatTransformer.css'

const WhatTransformer = () => {
   return (
      <div className="transformer__whattransformer section__margin" id="transformer">
      <div className="transformer__whattransformer-feature">
        <Feature title="What is Digital Marketing?" text="
Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a marketing channel. Essentially, if a marketing campaign involves digital communication, it's digital marketing." />
      </div>
      <div className="transformer__whattransformer-heading">
        <h1 className="gradient__text">The Promotions are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="transformer__whattransformer-container">
        <Feature title="Personal Assistant" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <Feature title="Books and courses" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        <Feature title="promotin VIA social media platforms
        " text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
   )
}

export default WhatTransformer
