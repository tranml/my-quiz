import { Text } from "react-native"
import Card from "./Card"

type EndGameCardProps = {
  score: number;
  totalQuestions: number;
  bestScore: number;
}

export default function EndGameCard({ score, totalQuestions, bestScore }: EndGameCardProps) {
  return <Card title="Well done!">
    <Text>
      Correct answers: {score}/{totalQuestions}
    </Text>
    <Text>Best score: {bestScore}</Text>
  </Card>
}