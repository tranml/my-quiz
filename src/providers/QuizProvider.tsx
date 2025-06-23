import { PropsWithChildren, createContext, useContext, useState } from "react";
import questions from "../questions";
import { Question } from "../types";

type QuizContextType = {
  questionIndex: number;
  question?: Question;
};

const QuizContext = createContext<QuizContextType>({
  questionIndex: 0,
});

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
