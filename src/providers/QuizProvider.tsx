import { PropsWithChildren, createContext, useContext, useState } from "react";
import questions from "../questions";
import { Question } from "../types";

type QuizContextType = {
  questionIndex: number;
  question?: Question;
  onNext: () => void;
  selectedOption?: string;
  setSelectedOption: (option: string) => void;
};

const QuizContext = createContext<QuizContextType>({
  questionIndex: 0,
  onNext: () => {
    return;
  },
  setSelectedOption: () => {
    return;
  },
});

export const QuizProvider = ({ children }: PropsWithChildren) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const question = questions[questionIndex];

  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  const onNext = () => {
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
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  return useContext(QuizContext);
};
