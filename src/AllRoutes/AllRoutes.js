import React from 'react'
import {
    Routes,
    Route
  } from "react-router-dom";

import Homepage from '../Homepage/Homepage';

import Quizinstructions 
  from '../quizInstructions/Quizinstructions';

import 
  Quizlisting from "../Quizlisting/Quiz"
import Result from '../Result/Result';

function AllRoutes() {
  return (
    <div>
      <Routes>
      <Route   path="/result" element={<Result />} />
      <Route   path="/quizinstruction" element={<Quizinstructions />} />
      <Route   path="/quiz" element={<Quizlisting />} />
      <Route   path="/" element={<Homepage />} />
    </Routes>

    </div>
  )
}

export default AllRoutes