import { View, Text, StyleSheet, Pressable } from "react-native";
import QuestionCard from "../components/QuestionCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";

import questions from "../questions";
import Card from "../components/Card";
const question = questions[10000];

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
          {question ? (
            <QuestionCard question={question} />
          ) : (
            <Card title="Well done!">
              <Text>Correct answers: 3/5</Text>
            </Card>
          )}
          <Text style={styles.time}>20s</Text>
        </View>

        <Pressable
          style={styles.button}
          onLongPress={() => {
            console.warn("Next button pressed");
          }}
        >
          <Text style={styles.buttonText}>Next</Text>
          <FontAwesome5
            style={styles.buttonIcon}
            name="arrow-right"
            size={24}
            color="white"
          />
        </Pressable>
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
  buttonIcon: {
    position: "absolute",
    right: 20,
  },
});
