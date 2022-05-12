import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";



const  Navbar = () => {

  return (

    <>
     <div className="navbar-container">  
     <div className="navbar-logo">
             <Link  to="/" className="navbar-links-header">Quiz WIth Bot</Link>
    </div>
    <div >
            <ul className="navbar-list-links">

                <li className="navbar-links">
                <Link  to="/quizinstruction"
                className="navbar-links"
                >Friends</Link>
                </li>
                <li className="navbar-links">
                    <Link to="/quizinstruction1"
                     className="navbar-links"
                     >h.i.m.y.m</Link>
                </li>
                <li className="navbar-links">
                <Link to="/quizinstruction2"
                 className="navbar-links"
                >Suits</Link>
                </li>
            </ul>
        </div>

        <div className="navbar-link-componentss">
            <ul className="navbar-list-links-components"> 
                <li className="navbar-links icons-align">
                    
                </li>
                <li className="navbar-links icons-align">
                    
                    
                </li>
                <li className="navbar-links icons-align">
                    
                </li>

            </ul>
        </div>


  </div>
    </>
  )
}

export default Navbar