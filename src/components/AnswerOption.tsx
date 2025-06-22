import { View, Text, StyleSheet } from "react-native";

export default function AnswerOption() {
  return (
    <View style={styles.answerOption}>
      <Text>This is an answer option</Text>
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