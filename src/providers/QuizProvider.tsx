import { PropsWithChildren, createContext } from "react";

const QuizContext = createContext({});

export const QuizProvider = ({ children }: PropsWithChildren) => {
  const questionIndex = 10;

  return (
    <QuizContext.Provider value={{ questionIndex }}>
      {children}
    </QuizContext.Provider>
  );
};
