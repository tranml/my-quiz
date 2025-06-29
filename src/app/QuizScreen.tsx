import * as React from "react";

import { View, Text, StyleSheet } from "react-native";
import QuestionCard from "../components/QuestionCard";
import { SafeAreaView } from "react-native-safe-area-context";

import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import { FontAwesome5 } from "@expo/vector-icons";

import { useQuizContext } from "../providers/QuizProvider";
import { useEffect, useRef, useState } from "react";
import EndGameCard from "../components/EndGameCard";
import LottieView from "lottie-react-native";

const colorPalette = {
  new: "#FDFEF4",
  title: "#005055",
  time: "#FF0000",
};

const useTimer = () => {
  const [time, setTime] = useState(20);

  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const startTimer = () => {
    stopTimer();
    setTime(20);
    intervalRef.current = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  return { time, startTimer, stopTimer };
};

export default function QuizScreen() {
  const { question, questionIndex, onNext, score, totalQuestions, bestScore } =
    useQuizContext();
  // const [time, setTime] = useState(20);
  const { time, startTimer, stopTimer } = useTimer();

  useEffect(() => {
    startTimer();
  }, [question]);

  useEffect(() => {
    if (time <= 0) {
      stopTimer();
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

        <>
          {question ? (
            <View>
              <QuestionCard question={question} />
              <Text style={styles.time}>{time} sec</Text>
            </View>
          ) : (
            <>
              <LottieView
                source={require("../../assets/congrats-lottie.json")}
                autoPlay
                loop={true}
                style={StyleSheet.absoluteFill}
              />
              <EndGameCard
                score={score}
                totalQuestions={totalQuestions}
                bestScore={bestScore}
              />
            </>
          )}
        </>

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
