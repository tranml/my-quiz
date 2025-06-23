import { PropsWithChildren, createContext, useState } from "react";
import questions from "../questions";

export const QuizContext = createContext({});

export const QuizProvider = ({ children }: PropsWithChildren) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const question = questions[questionIndex];

  return (
    <QuizContext.Provider value={{ questionIndex, question }}>
      {children}
    </QuizContext.Provider>
  );
};
