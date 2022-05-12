import React from 'react'
import {
    Routes,
    Route
  } from "react-router-dom";

import Homepage from '../Homepage/Homepage';

import {
  Quizinstructions , 
  Quizinstructions2 ,
  QuizInstructions1} 
  from '../quizInstructions/index';

import {
  Quizlisting , 
  Quizlistingsuits3 ,
  Quizlistingfriends2,
  Quizlistingfriends1  ,  
  Quizlistinghimym  ,
  Quizlistingsuits2 ,
  Quizlistingsuits1 ,
  Quizlistinghimym3 ,
  Quizlistinghimym2
} from "../Quizlisting/index"

function AllRoutes() {
  return (
    <div>
      <Routes>
      <Route  path="/quizlistingsuits3" element={<Quizlistingsuits3 />} />
      <Route  path="/quizlistingsuits2" element={<Quizlistingsuits2 />} />
      <Route  path="/quizlistingsuits1" element={<Quizlistingsuits1 />} />
      <Route path="/quizlistinghimym3" element={<Quizlistinghimym3 />} />
      <Route  path="/quizlistinghimym2" element={<Quizlistinghimym2 />} />
      <Route   path="/quizlistinghimym1" element={<Quizlistinghimym />} />
      <Route   path="/quizlisting2" element={<Quizlistingfriends2 />} />
      <Route   path="/quizlisting1" element={<Quizlistingfriends1 />} />
      <Route   path="/quizinstruction2" element={<Quizinstructions2 />} />
      <Route   path="/quizinstruction1" element={<QuizInstructions1 />} />
      <Route   path="/quizinstruction" element={<Quizinstructions />} />
      <Route   path="/quizlisting" element={<Quizlisting />} />
      <Route   path="/" element={<Homepage />} />
    </Routes>

    </div>
  )
}

export default AllRoutes