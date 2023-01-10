import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../Assets/logo.png";
import "./NavbarStyle.css";
import {useLogout} from "../../Hooks/useLogout/useLogout"

const Navbar = () => {

  const { logout} = useLogout();

  const handleClick = ()=>{
    logout();
  }
  return (
    <nav>
        <div className='navbar'>

            <h1>INKPROG</h1>

            <div className='nav-menu'>

            <Link to="/home">Home</Link> 
            <Link to="/book">Books Section</Link>
            <Link to="/return">Return Section</Link>
        
            <div className='signout-btn'>
            <button onClick={handleClick}>SignOut</button>
            </div>
          
            </div>
            
        </div>

    </nav>
  )
}

export default Navbar;