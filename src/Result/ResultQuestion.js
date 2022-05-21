import React from 'react'

function ResultQuestion({question , answer}) {
  return (
      <div>
    <h1 className="question-phrase">{question}</h1>
    <div className="question-buttons">
    <button className="question-phrase-button">{answer}</button>
    </div>
    </div>
  )
}   

export default ResultQuestion