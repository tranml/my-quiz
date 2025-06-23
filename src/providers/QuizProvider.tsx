import { PropsWithChildren, createContext, useContext, useState } from "react";
import questions from "../questions";
import { Question } from "../types";

type QuizContextType = {
  questionIndex: number;
  question?: Question;
  onNext: () => void;
  selectedOption?: string;
  setSelectedOption: (option: string) => void;
  score: number;
  totalQuestions: number;
};

const QuizContext = createContext<QuizContextType>({
  questionIndex: 0,
  onNext: () => {
    return;
  },
  setSelectedOption: () => {
    return;
  },
  score: 0,
  totalQuestions: 0,
});

export const QuizProvider = ({ children }: PropsWithChildren) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const question = questions[questionIndex];

  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [score, setScore] = useState(0);

  const onNext = () => {
    if (selectedOption === question?.correctAnswer) {
      setScore((currentScore) => currentScore + 1);
    }

    setQuestionIndex((questionIndex) => questionIndex + 1);
  };

  return (
    <QuizContext.Provider
      value={{
        questionIndex,
        question,
        onNext,
        selectedOption,
        setSelectedOption,
        score,
        totalQuestions: questions.length,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  return useContext(QuizContext);
};
