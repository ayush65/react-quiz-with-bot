import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import "./Quizlisting.css"

function Quizlistingsuits3() {
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
      <h1 className="question-number">Question : 3 / 3</h1>
      <h1 className="question-score">Score: 0</h1>
      <h1>Timer : {timer} </h1>
      </div>
      <h1 className="question-phrase">What is Harvey's Proffession in Suits Series ? </h1>
      <div className="question-buttons">
      <Link  to="/" className="question-phrase-button ">Lawyer</Link >
      <Link to="/" className="question-phrase-button">Carpenter</Link >
      <Link  to="/" className="question-phrase-button">Teacher</Link >
      <Link to="/" className="question-phrase-button">Actor</Link>
      </div>
  </div>
  </div>
  </div>
  )
}

export default Quizlistingsuits3