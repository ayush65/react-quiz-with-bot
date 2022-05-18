import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import "./Quizlisting.css"
import {friends , Suits} from "../backend/quizes"
import { useQuiz } from '../Context/quiz-context'

function Quizlisting() {

  const [timer , setTimer ] = useState(45);

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
    intervalFunction();
  }, []);
  const { statetotal} = useQuiz();
  const { stateDispatch } = useQuiz();
    
  return (
    <div>
      <Navbar />

      {JSON.stringify(statetotal.value) === "1"
        ? friends.map((item) => {

            return (
<div className="quiz-container">
        <div className="question-page-components">
        <div className="question-page-upper-component">
        <h1 className="question-number">Question : 1 / {statetotal.allquestion}</h1>
        <h1 className="question-score">Score: {statetotal.total_friends}</h1>
        <h1>Timer : {timer}</h1>
        </div>
        <h1 className="question-phrase">{friends[0].Question}</h1>
        <div className="question-buttons">
        <Link  to="/quiz2" onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "CORRECT_FRIENDS_QUIZ" , payload : 4})} } className="question-phrase-button ">{friends[0].option1}</Link >
        <Link to="/quiz2"  onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "WRONG_FRIENDS_QUIZ" , payload : 1})} } className="question-phrase-button">{friends[0].option2}</Link >
        <Link  to="/quiz2" onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "WRONG_FRIENDS_QUIZ" , payload : 1})} } className="question-phrase-button">{friends[0].option3}</Link >
        <Link to="/quiz2" onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "WRONG_FRIENDS_QUIZ" , payload : 1})} } className="question-phrase-button">{friends[0].option4}</Link>
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
        <h1 className="question-number">Question : 1 / {statetotal.allquestion}</h1>
        <h1 className="question-score">Score: {statetotal.total_suits}</h1>
        <h1>Timer : {timer}</h1>
        </div>
        <h1 className="question-phrase">{Suits[0].Question}</h1>
        <div className="question-buttons">
        <Link  to="/quiz2" onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "CORRECT_SUITS_QUIZ" , payload : 4})} } className="question-phrase-button ">{Suits[0].option1}</Link >
        <Link to="/quiz2" onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "WRONG_SUITS_QUIZ" , payload : 1})} } className="question-phrase-button">{Suits[0].option2}</Link >
        <Link  to="/quiz2"  onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "WRONG_SUITS_QUIZ" , payload : 1})} } className="question-phrase-button">{Suits[0].option3}</Link >
        <Link to="/quiz2"  onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "WRONG_SUITS_QUIZ" , payload : 1})} } className="question-phrase-button">{Suits[0].option4}</Link>
        </div>
    </div>
    </div>
            );
          })}

          
    
    </div>
  )
}

export default Quizlisting