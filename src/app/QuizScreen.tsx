import { View, Text, StyleSheet } from "react-native";
import QuestionCard from "../components/QuestionCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import questions from "../questions";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import { FontAwesome5 } from "@expo/vector-icons";

import { useContext } from "react";
import { QuizContext } from "../providers/QuizProvider";

const colorPalette = {
  new: "#FDFEF4",
  title: "#005055",
  time: "#FF0000",
};

export default function QuizScreen() {
  const { question } = useContext(QuizContext);

  console.log("question: ", question);

  const onNext = () => {
    // setQuestionIndex(questionIndex + 1);
  };

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

        <CustomButton
          title="Next"
          rightIcon={
            <FontAwesome5
              name="arrow-right"
              size={24}
              color="white"
            />
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
