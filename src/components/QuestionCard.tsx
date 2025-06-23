import { View } from "react-native";
import AnswerOption from "./AnswerOption";
import { Question } from "../types";
import Card from "./Card";
import { useState } from "react";

type QuestionCardProps = {
  question: Question;
};

export default function QuestionCard(props: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  const onOptionSelected = (option: string) => {
    console.warn(option, "selected");
    setSelectedOption(option);
  };

  return (
    <Card title={props.question.title}>
      <View style={{ gap: 20 }}>
        {props.question.options.map((option, index) => (
          <AnswerOption
            key={option + index}
            option={option}
            isSelected={selectedOption === option}
            onPress={() => onOptionSelected(option)}
          />
        ))}
      </View>
    </Card>
  );
}
