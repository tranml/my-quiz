import { View, Text, StyleSheet } from "react-native";
import AnswerOption from "./AnswerOption";
import { Question } from "../types";

type QuestionCardProps = {
  question: Question;
};

export default function QuestionCard(props: QuestionCardProps) {
  const selectedOption = props.question.options[0];

  const onOptionSelected = (option: string) => {
    console.warn(option, "selected");
  };

  return (
    <View style={styles.questionCard}>
      <Text style={styles.question}>{props.question.title}</Text>
      <View style={{ gap: 20 }}>
        <AnswerOption
          option={props.question.options[0]}
          isSelected={selectedOption === props.question.options[0]}
          onPress={() => onOptionSelected(props.question.options[0])}
        />
        <AnswerOption
          option={props.question.options[1]}
          isSelected={selectedOption === props.question.options[1]}
          onPress={() => onOptionSelected(props.question.options[1])}
        />
        <AnswerOption
          option={props.question.options[2]}
          isSelected={selectedOption === props.question.options[2]}
          onPress={() => onOptionSelected(props.question.options[2])}
        />
        <AnswerOption
          option={props.question.options[3]}
          isSelected={selectedOption === props.question.options[3]}
          onPress={() => onOptionSelected(props.question.options[3])}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  questionCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    paddingVertical: 40,
    borderRadius: 20,
    gap: 20,
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
  },
  question: {
    fontSize: 18,
    fontWeight: 500,
  },
});
