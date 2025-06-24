import { View, Text, StyleSheet } from "react-native";
import QuestionCard from "../components/QuestionCard";
import { SafeAreaView } from "react-native-safe-area-context";

import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import { FontAwesome5 } from "@expo/vector-icons";

import { useQuizContext } from "../providers/QuizProvider";
import { useEffect, useState } from "react";

const colorPalette = {
  new: "#FDFEF4",
  title: "#005055",
  time: "#FF0000",
};

export default function QuizScreen() {
  const { question, questionIndex, onNext, score, totalQuestions, bestScore } =
    useQuizContext();
  const [time, setTime] = useState(20);

  useEffect(() => {
    setTime(20);

    const interval =  setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [question]);

  useEffect(() => {
    if (time <= 0) {
      onNext();
    }
  }, [time]);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            Question {questionIndex + 1}/{totalQuestions}
          </Text>
        </View>

        <View>
          {question ? (
            <View>
              <QuestionCard question={question} />
              <Text style={styles.time}>{time} sec</Text>
            </View>
          ) : (
            <Card title="Well done!">
              <Text>
                Correct answers: {score}/{totalQuestions}
              </Text>
              <Text>Best score: {bestScore}</Text>
            </Card>
          )}
        </View>

        <CustomButton
          title="Next"
          rightIcon={
            <FontAwesome5 name="arrow-right" size={24} color="white" />
          }
          onPress={onNext}
        />
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
});
