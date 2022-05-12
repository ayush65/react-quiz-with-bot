import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import "./Quizlisting.css"

function Quizlistinghimym() {
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
      <h1 className="question-number">Question : 1 / 3</h1>
      <h1 className="question-score">Score: 0</h1>
      <h1>Timer : {timer} </h1>
      </div>
      <h1 className="question-phrase">What is himym stands for ? </h1>
      <div className="question-buttons">
      <Link to="/quizlistinghimym2" className="question-phrase-button ">How I met your mother</Link >
      <Link to="/quizlistinghimym2" className="question-phrase-button">How i make you momos </Link >
      <Link  to="/quizlistinghimym2" className="question-phrase-button">HIMYM</Link >
      <Link to="/quizlistinghimym2" className="question-phrase-button">None of Above</Link>
      </div>
  </div>
  </div>
  </div>
  )
}

export default Quizlistinghimym