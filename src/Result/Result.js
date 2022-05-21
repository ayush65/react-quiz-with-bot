import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import "./Result.css"
import {friends , Suits} from "../backend/quizes"
import ResultQuestion from './ResultQuestion'
import { useQuiz } from '../Context/quiz-context'


function Result() {


    const { statetotal , stateDispatch} = useQuiz();

  return (
    <div>
        <Navbar />
        <div className="question-page-components quiz-answer-page">
        <div class="question-page-upper-component">
   
        <h1 className="question-score score-quiz">Answers</h1>
        </div>
        {JSON.stringify(statetotal.value) === "1"

        ? <div >
                 <h1 className="question-score score-quiz">Score: {statetotal.total_friends}</h1>
                <ResultQuestion question={friends[0].Question} answer={friends[0].option1}/>
                <ResultQuestion question={friends[1].Question} answer={friends[1].option1}/>
                <ResultQuestion question={friends[2].Question} answer={friends[2].option1}/>
                <ResultQuestion question={friends[3].Question} answer={friends[3].option1}/>
                <ResultQuestion question={friends[4].Question} answer={friends[4].option1}/>
                <ResultQuestion question={friends[5].Question} answer={friends[5].option1}/>
                <ResultQuestion question={friends[6].Question} answer={friends[6].option1}/>
                <ResultQuestion question={friends[7].Question} answer={friends[7].option1}/>
                <ResultQuestion question={friends[8].Question} answer={friends[8].option1}/>
                <ResultQuestion question={friends[9].Question} answer={friends[9].option1}/>
                <Link to="/" className="exit-button" onClick={() => {stateDispatch({ type: "EXIT" })}}>Exit Quiz</Link>
                </div>
                : <div>
                         <h1 className="question-score score-quiz">Score: {statetotal.total_suits}</h1>
                <ResultQuestion question={Suits[0].Question} answer={Suits[0].option3}/>
                <ResultQuestion question={Suits[1].Question} answer={Suits[1].option3}/>
                <ResultQuestion question={Suits[2].Question} answer={Suits[2].option3}/>
                <ResultQuestion question={Suits[3].Question} answer={Suits[3].option3}/>
                <ResultQuestion question={Suits[4].Question} answer={Suits[4].option3}/>
                <ResultQuestion question={Suits[5].Question} answer={Suits[5].option3}/>
                <ResultQuestion question={Suits[6].Question} answer={Suits[6].option3}/>
                <ResultQuestion question={Suits[7].Question} answer={Suits[7].option3}/>
                <ResultQuestion question={Suits[8].Question} answer={Suits[8].option3}/>
                <ResultQuestion question={Suits[9].Question} answer={Suits[9].option3}/>
                <Link to="/" className="exit-button" onClick={() => {stateDispatch({ type: "EXIT" })}}>Exit Quiz</Link>
                </div>

  }    



                
                </div>


    
    </div>
  )
}

export default Result