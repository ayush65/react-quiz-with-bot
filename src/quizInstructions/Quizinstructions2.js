import React from 'react'
import { Link } from 'react-router-dom'
import "./quizinstructions.css"
import Navbar from "../Navbar/Navbar"

function Quizinstructions2() {
  return (
    <div>
    <Navbar />
<div className="quiz-instructions">
  <div className="rules-page-components">
  <ul className="rules-list">
      <h1 className="rules-list-title">Rules for the quiz</h1>
      
      <h2 className="rules-list-item">
        The countdown timer at the top right corner of screen will display.
      </h2>
      <h2 className="rules-list-item">Each question have 4 options.</h2>
      <h2 className="rules-list-item">
        There will be 2 marks for every correction answer.
      </h2>
      <h2 className="rules-list-item">
        There will be deduction of 1 mark on wrong answer.
      </h2>
      <h2 className="rules-list-item">You can not visit the previous question.</h2>
      <h2 className="rules-list-item">
        Every question need to be completed in given time. It will be auto
        submitted.
      </h2>
      <h2 className="rules-list-item">
        Once you click on your answer you will be redirected to the next answer
      </h2>
    </ul>
    <Link  to="/quizlistingsuits1" className="quiz-start-button button-ref">Start</Link>
    <Link  to="/" className="quiz-go-back-button button-ref">Go Back</Link>
</div>
</div>
</div>
  )
}

export default Quizinstructions2