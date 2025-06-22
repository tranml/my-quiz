import { View, Text, StyleSheet } from "react-native";
import QuestionCard from "../components/QuestionCard";
import { SafeAreaView } from "react-native-safe-area-context";

const colorPalette = {
  new: "#FDFEF4",
  title: "#005055",
};

export default function QuizScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>

        <QuestionCard />

        <View>
          <Text>Footer</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colorPalette.new,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    textAlign: "center",
    color: colorPalette.title,
  },
});
