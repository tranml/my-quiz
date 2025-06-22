import { View, Text, StyleSheet } from "react-native";
import { Question } from "../types";

type AnswerOptionProps = {
  option: Question["options"][number];
  isSelected: boolean;
};

export default function AnswerOption(props: AnswerOptionProps) {
  return (
    <View
      style={[
        styles.answerOption,
        props.isSelected ? { borderWidth: 3, borderColor: "#005055" } : null,
      ]}
    >
      <Text>{props.option}</Text>
    </View>
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
