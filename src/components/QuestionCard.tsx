import { View, Text, StyleSheet } from "react-native";
import AnswerOption from "./AnswerOption";

export default function QuestionCard() {
  return (
    <View style={styles.questionCard}>
      <Text style={styles.question}>What is React Native?</Text>
      <View style={{gap: 20}}>
        <AnswerOption />
        <AnswerOption />
        <AnswerOption />
        <AnswerOption />
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
 } 
});