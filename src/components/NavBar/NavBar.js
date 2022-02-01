import React from 'react';
import './NavBar.css'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return <div>
              
            <div class="dropdown">
            <nav>  
                <ul>
                <Link to={'/'}>    <li><a href="#">Home</a></li></Link> 
                <Link to={'/moviesList'}>  <li><a href="#">Movies</a></li></Link>
                 
                </ul>
            </nav>
            </div>

  </div>
};

export default NavBar;
