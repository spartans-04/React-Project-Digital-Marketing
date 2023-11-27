import React, { Fragment, useState } from 'react';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/Transformerlogo.png'
import './navbar.css'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Login from '../Login';
import SignUp from '../signin';
import Header from '../../containers/header/Header';
import SignIn from '../Login';


const Menu = () => (
   <>
      <p><a href="#home"> Home</a></p>
      <p><a href="#transformer"> Promotion</a></p>
      <p><a href="#possibility"> Advertising</a></p>
      <p><a href="#features"> Ideas</a></p>
      <p><a href="#blog"> Courses</a></p>
   </>
)

const Navbar = () => {
   const [toogleMenu, setToggleMenu] = useState(false);

   return (
      <Router>
      <div className="transformer__navbar">
         <div className="transformer__navbar-links">
            <div className="transformer__navbar-links_logo">
               <img src={logo} alt="tranformer logo"></img>
            </div>
            <div className="transformer__navbar-links_container">
               <Menu />
            </div>
         </div>
         <div className="transformer__navbar-sign">
         <Link to='/Login'>signin
                           </Link>
         </div>

         <div className="transformer__navbar-menu">

            {toogleMenu ?
               <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
               : <RiMenu3Fill color="#fff" size={27} onClick={() => setToggleMenu(true)} />
            }
            {
               toogleMenu && (
                  <div className="transformer__navbar-menu_container scale-up-center">
                     <div className="transformer__navbar-menu_container-links">
                        <Menu />

                        <div className="transformer__navbar-menu_container-links-sign">
                           <p>Sign in</p>
                           <button type="button">Sign up</button>
                     <br />
                     <br />
                        </div>
                     </div>
                  </div>
               )
            }

         </div>
      </div>
         <Routes>
               <Route exact path='/head' element={<Header />}></Route>
               <Route exact path='/Login' element={<SignIn />}></Route>
               <Route exact path='/Register' element={<SignUp />}></Route>
         </Routes>
      </Router>
   )
}

export default Navbar
