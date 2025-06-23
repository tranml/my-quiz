import { View, Text, StyleSheet, Pressable } from "react-native";
import { Question } from "../types";

type AnswerOptionProps = {
  option: Question["options"][number];
  isSelected: boolean;
  onPress: () => void;
};

export default function AnswerOption(props: AnswerOptionProps) {
  return (
    <Pressable
      style={[
        styles.answerOption,
        props.isSelected ? { borderWidth: 3, borderColor: "#005055" } : null,
      ]}
      onPress={() => props.onPress()}
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
