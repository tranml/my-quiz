import { View, Text } from "react-native";

const colorPalette = {
    new: "#FDFEF4"
};

export default function QuizScreen() {
  return (
    <View
      style={{
        backgroundColor: colorPalette.new,
        flex: 1,
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Text>Hello World from QuizScreen</Text>
    </View>
  );
}
