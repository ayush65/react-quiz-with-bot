import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import "./Quizlisting.css"

function Quizlistingfriends1() {
  const [timer, setTimer] = useState(45);

  const intervalFunction = (times) => {
    let j = 0;
    for (let i = times; i >= 0; i--) {
      j = j + 1;
      setTimeout(() => {
        console.log(i);
        setTimer(i);
      }, j * 1000);
    }


  };

  useEffect(() => {
    intervalFunction(45);
  }, []);

  return (
    <div>
    <Navbar />
  <div className="quiz-container">
      <div className="question-page-components">
      <div className="question-page-upper-component">
      <h1 className="question-number">Question : 2 / 3</h1>
      <h1 className="question-score">Score: 4</h1>
      <h1>Timer : {timer}</h1>
      </div>
      <h1 className="question-phrase">How Many Friends are there in friends series?</h1>
      <div className="question-buttons">
      <Link to="/quizlisting2" className="question-phrase-button">6</Link>
      <Link  to="/quizlisting2" className="question-phrase-button">2</Link>
      <Link to="/quizlisting2" className="question-phrase-button">5</Link>
      <Link to="/quizlisting2" className="question-phrase-button">4</Link>
      </div>
  </div>
  </div>
  </div>
  )
}

export default Quizlistingfriends1