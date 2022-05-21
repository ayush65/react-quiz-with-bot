import React from 'react'
import { Link } from 'react-router-dom'
import { useQuiz } from '../../Context/quiz-context';
import "./HomepageCard.css"

function HomepageCard() {

  const { stateDispatch } = useQuiz();
  return (
    <div>
     
    <div className="homepage-card-container">
        <div className="navbar-div-first">
            <img src="https://i.pinimg.com/736x/7e/a1/c4/7ea1c4d26d656c955e278ec617557c06.jpg" alt="" className="img-container" />
            <Link to="/quizinstruction"  onClick={() => {stateDispatch({ type: "obj1" }) ; stateDispatch({type : "INCREMENT"})}  } className="quiz-button">Play Now</Link>
        </div>

        <div className="navbar-div-first">
            <img src="https://www.uphe.com/sites/default/files/styles/scale__344w_/public/SuitsSeasonSeven_PosterArt.png" alt="" className="img-container" />
            <Link to="/quizinstruction"  onClick={() => {stateDispatch({ type: "obj2" }); stateDispatch({ type : "INCREMENT"})}} className="quiz-button">Play Now</Link>
        </div>
    </div>
    </div>
  )
}

export default HomepageCard