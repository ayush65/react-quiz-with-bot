import React from 'react'
import {
    Routes,
    Route
  } from "react-router-dom";

import Homepage from '../Homepage/Homepage';

import {
  Quizinstructions , 
  QuizInstructions1} 
  from '../quizInstructions/index';

import {
  Quizlisting , 
  Quizlistingfriends2,
  Quizlistingfriends1 
} from "../Quizlisting/index"

function AllRoutes() {
  return (
    <div>
      <Routes>
      <Route   path="/quiz3" element={<Quizlistingfriends2 />} />
      <Route   path="/quiz2" element={<Quizlistingfriends1 />} />
      <Route   path="/quizinstruction1" element={<QuizInstructions1 />} />
      <Route   path="/quizinstruction" element={<Quizinstructions />} />
      <Route   path="/quiz1" element={<Quizlisting />} />
      <Route   path="/" element={<Homepage />} />
    </Routes>

    </div>
  )
}

export default AllRoutes