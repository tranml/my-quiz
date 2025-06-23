import { PropsWithChildren, createContext, useContext, useState } from "react";
import questions from "../questions";

const QuizContext = createContext({});

export const QuizProvider = ({ children }: PropsWithChildren) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const question = questions[questionIndex];

  return (
    <QuizContext.Provider value={{ questionIndex, question }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  return useContext(QuizContext);
};
