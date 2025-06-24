import { View } from "react-native";
import AnswerOption from "./AnswerOption";
import { Question } from "../types";
import Card from "./Card";
import { useEffect } from "react";

type QuestionCardProps = {
  question: Question;
};

export default function QuestionCard(props: QuestionCardProps) {
  useEffect(() => {
    console.log("QuestionCard mounted");

    return () => {
      console.log("QuestionCard unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("QuestionCard updated", props.question);

    return () => {
      console.log("QuestionCard renders new question: Clean up");
    };
  }, [props.question]);

  return (
    <Card title={props.question.title}>
      <View style={{ gap: 20 }}>
        {props.question.options.map((option, index) => (
          <AnswerOption
            key={option + index}
            option={option}
          />
        ))}
      </View>
    </Card>
  );
}
