import React from 'react';
import {blog01,blog02,blog03,blog04,blog05} from './imports'
import { Article } from '../../components';
import './blog.css'
import { MyContext } from '../usecontext';
const Blog = () => {
   console.log(MyContext);
   return (
      <div className="transformer__blog section__padding" id="blog">
         <div className="transformer__blog-heading">
            <h1 className="gradient__text">Giving sessions for our Futurs Enterpepurneur</h1>
         </div>

         <div className="transformer__blog-container">
            <div className="transformer__blog-container_groupA">
               <Article imgUrl={blog01} date="Sep 26, 2021" title="Lets discuss about your Brand :-)"/>
            </div>
            <div className="transformer__blog-container_groupB">
               <Article imgUrl={blog02} date="Sep 26, 2021" title="Want to be a future Biliionare??"/>
               <Article imgUrl={blog03} date="Sep 26, 2021" title="Workshops available for Next gen billionares !!"/>
               <Article imgUrl={blog04} date="Sep 26, 2021" title="lets discuss sessions"/>
               <Article imgUrl={blog05} date="Sep 26, 2021" title="Digital-Web-Sites"/>
            </div>
         </div>
      </div>
   )
}

export default Blog
