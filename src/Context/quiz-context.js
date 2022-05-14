import { createContext, useContext, useReducer } from "react";
import { reducerFunc, initialstate } from "../Reducer/Reducer";

const QuizContext = createContext(null);

const QuizProvider = ({ children }) => {
  const [statetotal, stateDispatch] = useReducer(reducerFunc, initialstate);

  return (
    <QuizContext.Provider value={{ statetotal, stateDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
const useQuiz = () => useContext(QuizContext);
export { QuizProvider, useQuiz,  QuizContext };
