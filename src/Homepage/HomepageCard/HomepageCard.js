import React from 'react'
import { Link } from 'react-router-dom'
import "./HomepageCard.css"

function HomepageCard() {
  return (
    <div>
     
    <div className="homepage-card-container">
        <div className="navbar-div-first">
            <img src="https://i.pinimg.com/736x/7e/a1/c4/7ea1c4d26d656c955e278ec617557c06.jpg" alt="" className="img-container" />
            <Link to="/quizinstruction" className="quiz-button">Play Now</Link>
        </div>

        <div className="navbar-div-first">
        <img src="https://w0.peakpx.com/wallpaper/232/450/HD-wallpaper-himym-how-i-met-your-mother-show.jpg" alt=""  className="img-container"/>
        <Link to="/quizinstruction1" className="quiz-button">Play Now</Link>
        </div>
        <div className="navbar-div-first">
            <img src="https://www.uphe.com/sites/default/files/styles/scale__344w_/public/SuitsSeasonSeven_PosterArt.png" alt="" className="img-container" />
            <Link to="/quizinstruction2" className="quiz-button">Play Now</Link>
        </div>
    </div>
    </div>
  )
}

export default HomepageCard