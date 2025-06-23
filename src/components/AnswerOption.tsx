import { Text, StyleSheet, Pressable } from "react-native";
import { Question } from "../types";
import { useQuizContext } from "../providers/QuizProvider";

type AnswerOptionProps = {
  option: Question["options"][number];
  // isSelected: boolean;
  // onPress: () => void;
};

export default function AnswerOption(props: AnswerOptionProps) {
  const { selectedOption, setSelectedOption } = useQuizContext();

  const isSelected = selectedOption === props.option;

  return (
    <Pressable
      style={[
        styles.answerOption,
        isSelected ? { borderWidth: 3, borderColor: "#005055" } : null,
      ]}
      onPress={() => setSelectedOption(props.option)}
    >
      <Text>{props.option}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  answerOption: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 100,
    padding: 16,
  },
});
