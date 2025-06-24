import * as React from "react";
import { Text } from "react-native";
import Card from "./Card";
import LottieView from "lottie-react-native";

type EndGameCardProps = {
  score: number;
  totalQuestions: number;
  bestScore: number;
};

export default function EndGameCard({
  score,
  totalQuestions,
  bestScore,
}: EndGameCardProps) {
  return (
    <>
      <LottieView
        source={require("../../assets/congrats-lottie.json")}
        autoPlay
        loop={false}
        style={{ width: 200, height: 200 }}
      />
      <Card title="Well done!">
        <Text>
          Correct answers: {score}/{totalQuestions}
        </Text>
        <Text>Best score: {bestScore}</Text>
      </Card>
    </>
  );
}
