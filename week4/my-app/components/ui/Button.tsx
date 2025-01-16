import { Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

type CustomButtonType = {
  title: string;
  onPress: () => void;
};

export default function CustomButton({ title, onPress }: CustomButtonType) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.light.primary50,
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  validButton: {
    backgroundColor: Colors.light.primary50,
  },
});
