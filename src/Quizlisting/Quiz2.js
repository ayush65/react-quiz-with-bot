import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import "./Quizlisting.css"
import {friends , Suits} from "../backend/quizes"
import { useQuiz } from '../Context/quiz-context'

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

  const { statetotal, stateDispatch } = useQuiz();

  return (
    <div>
    <Navbar />
  
    {JSON.stringify(statetotal.value) === "1"
        ? friends.map((item) => {

            return (
<div className="quiz-container">
        <div className="question-page-components">
        <div className="question-page-upper-component">
        <h1 className="question-number">Question : 2 / {statetotal.allquestion}</h1>
        <h1 className="question-score">Score: {Number(statetotal.total_friends)}</h1>
        <h1>Timer : {timer}</h1>
        </div>
        <h1 className="question-phrase">{friends[1].Question}</h1>
        <div className="question-buttons">
        <Link  to="/quiz3" onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "WRONG_FRIENDS_QUIZ" , payload : 1})} } className="question-phrase-button ">{friends[1].option1}</Link >
        <Link to="/quiz3" onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "CORRECT_FRIENDS_QUIZ" , payload : 4})} } className="question-phrase-button">{friends[1].option2}</Link >
        <Link  to="/quiz3" onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "WRONG_FRIENDS_QUIZ" , payload : 1})} } className="question-phrase-button">{friends[1].option3}</Link >
        <Link to="/quiz3" onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "WRONG_FRIENDS_QUIZ" , payload : 1})} } className="question-phrase-button">{friends[1].option4}</Link>
        </div>
    </div>
    </div>
            );
          })
        : Suits.map((item) => {
            return (
<div className="quiz-container">
        <div className="question-page-components">
        <div className="question-page-upper-component">
        <h1 className="question-number">Question : 2 / {statetotal.allquestion}</h1>
        <h1 className="question-score">Score: {statetotal.total_suits}</h1>
        <h1>Timer : {timer}</h1>
        </div>
        <h1 className="question-phrase">{Suits[1].Question}</h1>
        <div className="question-buttons">
        <Link  to="/quiz3" onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "WRONG_SUITS_QUIZ" , payload : 1})} } className="question-phrase-button ">{Suits[1].option1}</Link >
        <Link to="/quiz3" onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "WRONG_SUITS_QUIZ" , payload : 1})} } className="question-phrase-button">{Suits[1].option2}</Link >
        <Link  to="/quiz3" onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "WRONG_SUITS_QUIZ" , payload : 1})} } className="question-phrase-button">{Suits[1].option3}</Link >
        <Link to="/quiz3" onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "CORRECT_SUITS_QUIZ" , payload : 4})} } className="question-phrase-button">{Suits[1].option4}</Link>
        </div>
    </div>
    </div>
            );
          })}

  </div>
  )
}

export default Quizlistingfriends1