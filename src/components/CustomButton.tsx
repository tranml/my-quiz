import { Pressable, Text, StyleSheet, View } from "react-native";

type CustomButtonProps = {
  title: string;
  rightIcon?: React.ReactNode;
};

export default function CustomButton(props: CustomButtonProps) {
  return (
    <Pressable
      style={styles.button}
      onLongPress={() => {
        console.warn("Next button pressed");
      }}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
      {props.rightIcon && (
        <View style={styles.rightIcon}>{props.rightIcon}</View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#005055",
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
  rightIcon: {
    position: "absolute",
    right: 20,
  },
});
