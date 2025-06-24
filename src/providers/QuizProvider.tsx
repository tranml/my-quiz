import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import questions from "../questions";
import { Question } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

type QuizContextType = {
  questionIndex: number;
  question?: Question;
  onNext: () => void;
  selectedOption?: string;
  setSelectedOption: (option: string) => void;
  score: number;
  totalQuestions: number;
  bestScore: number;
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
  bestScore: 0,
});

export const QuizProvider = ({ children }: PropsWithChildren) => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const question = questions[questionIndex];

  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [score, setScore] = useState(0);

  const isFinished = questionIndex >= questions.length;

  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    loadBestScore();
  }, []);

  useEffect(() => {
    if (isFinished && score > bestScore) {
      setBestScore(score);
      saveBestScore(score);
    }
  }, [isFinished]);

  const restart = () => {
    setQuestionIndex(0);
    setScore(0);
    setSelectedOption(undefined);
  };

  const onNext = () => {
    if (isFinished) {
      restart();
      return;
    }

    if (selectedOption === question?.correctAnswer) {
      setScore((currentScore) => currentScore + 1);
    }

    setQuestionIndex((questionIndex) => questionIndex + 1);
  };

  const saveBestScore = async (score: number) => {
    try {
      console.warn("Saving best score", score);
      await AsyncStorage.setItem("best-score", score.toString());
    } catch (error) {
      console.error(error);
    }
  };

  const loadBestScore = async () => {
    try {
      const bestScore = await AsyncStorage.getItem("best-score");

      if (bestScore !== null) {
        setBestScore(Number.parseInt(bestScore));
      }
    } catch (error) {
      console.error(error);
    }
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
        bestScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  return useContext(QuizContext);
};
