import { View, Text, StyleSheet } from "react-native";
import { PropsWithChildren } from "react";


type CardProps = {
  title: string;
};

export default function Card(props: PropsWithChildren<CardProps>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    paddingVertical: 40,
    borderRadius: 20,
    gap: 20,
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
  },
});