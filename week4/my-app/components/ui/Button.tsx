import { Pressable, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default function CustomButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
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
});
