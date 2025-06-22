import { View } from "react-native";
import AnswerOption from "./AnswerOption";
import { Question } from "../types";
import Card from "./Card";

type QuestionCardProps = {
  question: Question;
};

export default function QuestionCard(props: QuestionCardProps) {
  const selectedOption = props.question.options[0];

  const onOptionSelected = (option: string) => {
    console.warn(option, "selected");
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
