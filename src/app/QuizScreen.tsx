import { View, Text, StyleSheet } from "react-native";
import QuestionCard from "../components/QuestionCard";
import { SafeAreaView } from "react-native-safe-area-context";

const colorPalette = {
  new: "#FDFEF4",
  title: "#005055",
  time: "#FF0000",
  buttonColor: "#005055",
};

export default function QuizScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>

        <View>
          <QuestionCard />
          <Text style={styles.time}>20s</Text>
        </View>

        <View style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
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
  time: {
    textAlign: "center",
    color: colorPalette.time,
    fontSize: 12,
    fontWeight: 500,
    marginTop: 16,
  },
  button: {
    backgroundColor: colorPalette.buttonColor,
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: 500,
    letterSpacing: 1.5,
  },
});
