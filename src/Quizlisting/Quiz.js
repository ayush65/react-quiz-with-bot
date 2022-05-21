import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import "./Quizlisting.css"
import {friends , Suits} from "../backend/quizes"
import { useQuiz } from '../Context/quiz-context'

function Quizlisting() {

  const [timer , setTimer ] = useState(100);
  const [count , setCount ] = useState(0); 
  const [ redirect ] = useState("/quiz");
  const [ redirectback ] = useState("/result");



  const intervalFunction = () => {
    let j = 0;
    for (let i = 100; i >= 0; i--) {
      j = j + 1;
      setTimeout(() => {
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
        ? friends.map(() => {

            return (
<div className="quiz-container">
        <div className="question-page-components">
        <div className="question-page-upper-component">
        <h1 className="question-number">Question : {count + 1} / {statetotal.allquestion}</h1>
        <h1 className="question-score">Score: {statetotal.total_friends}</h1>
        <h1>Timer : {timer}</h1>
        </div>
        <h1 className="question-phrase">{friends[count].Question}</h1>
        <div className="question-buttons">
        <Link  to={count === 9 ? redirectback : redirect} onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "CORRECT_FRIENDS_QUIZ" , payload : 4}) ; setCount(count + 1) } } className="question-phrase-button ">{friends[count].option1}</Link >
        <Link to={count === 9 ? redirectback : redirect} onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "WRONG_FRIENDS_QUIZ" , payload : 1}) ; setCount(count + 1)} } className="question-phrase-button">{friends[count].option2}</Link >
        <Link  to={count === 9 ? redirectback : redirect} onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "WRONG_FRIENDS_QUIZ" , payload : 1}); setCount(count + 1)} } className="question-phrase-button">{friends[count].option3}</Link >
        <Link to={count === 9 ? redirectback : redirect} onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "WRONG_FRIENDS_QUIZ" , payload : 1}) ; setCount(count + 1)} } className="question-phrase-button">{friends[count].option4}</Link>
        </div>
    </div>
    </div>
            );
          })
        : Suits.map(() => {
            return (
<div className="quiz-container">
        <div className="question-page-components">
        <div className="question-page-upper-component">
        <h1 className="question-number">Question : {count + 1} / {statetotal.allquestion}</h1>
        <h1 className="question-score">Score: {statetotal.total_suits}</h1>
        <h1>Timer : {timer}</h1>
        </div>
        <h1 className="question-phrase">{Suits[count].Question}</h1>
        <div className="question-buttons">
        <Link  to={count === 9 ? redirectback : redirect} onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "WRONG_SUITS_QUIZ" , payload : 1}) ; setCount(count + 1)} } className="question-phrase-button ">{Suits[count].option1}</Link >
        <Link to={count === 9 ? redirectback : redirect} onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "WRONG_SUITS_QUIZ" , payload : 1}) ; setCount(count + 1)} } className="question-phrase-button">{Suits[count].option2}</Link >
        <Link  to={count === 9 ? redirectback : redirect}  onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "CORRECT_SUITS_QUIZ" , payload : 4}) ; setCount(count + 1)} } className="question-phrase-button">{Suits[count].option3}</Link >
        <Link to={count === 9 ? redirectback : redirect} onClick={() => {stateDispatch({ type: "INCREMENT" }) ; stateDispatch({ type: "WRONG_SUITS_QUIZ" , payload : 1}) ; setCount(count + 1)} } className="question-phrase-button">{Suits[count].option4}</Link>
        </div>
    </div>
    </div>
            );
          })}

          
    
    </div>
  )
}

export default Quizlisting