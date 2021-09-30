import React from 'react';
import {Link} from 'react-router-dom'


function Nav() {
  const navStyle = {
    color : 'white'
  };



    return (
     <nav className="nav-bar">
       <Link style={navStyle}  to="/">
       <h3>TCG-app</h3>
       </Link>
       

       <ul className='nav-links'>

         
         <Link style={navStyle} to="/login">
         <li>login</li>
         </Link>
         <Link style={navStyle} to="/update" >
         <li>updates</li>
         </Link>
       </ul>
     </nav>
    );
  }
  
  export default Nav;