import { PropsWithChildren } from "react";
import * as React from "react";

export const QuizProvider = ({ children }: PropsWithChildren) => {
  console.warn("QuizProvider");

  return <>{children}</>;
};
