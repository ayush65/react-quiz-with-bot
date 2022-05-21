import React from 'react'
import { Link } from 'react-router-dom';
import { useQuiz } from '../Context/quiz-context';
import "./Navbar.css";



const  Navbar = () => {

  const { stateDispatch } = useQuiz();

  return (

    <>
     <div className="navbar-container">  
     <div className="navbar-logo">
             <Link  to="/" className="navbar-links-header">Quiz With Bot</Link>
    </div>
    <div >
            <ul className="navbar-list-links">

                <li className="navbar-links">
                <Link  to="/quizinstruction"
                 onClick={() => {stateDispatch({ type: "obj1" }) ; stateDispatch({type : "INCREMENT"}) ;stateDispatch({ type: "EXIT" })}  }
                className="navbar-links"
                >Friends</Link>
                </li>
                <li className="navbar-links">
                <Link to="/quizinstruction"
                onClick={() => {stateDispatch({ type: "obj2" }); stateDispatch({ type : "INCREMENT"}) ;stateDispatch({ type: "EXIT" })}}
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