import { View, Text, StyleSheet } from "react-native";
import QuestionCard from "../components/QuestionCard";

const colorPalette = {
  new: "#FDFEF4",
};

export default function QuizScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Question 1/5</Text>
      </View>

      <QuestionCard />

      <View>
        <Text>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorPalette.new,
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
});
