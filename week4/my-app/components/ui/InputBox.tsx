import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StyleProp,
  TextStyle,
} from "react-native";
import { Colors } from "@/constants/Colors";

export default function InputBox({
  label,
  description,
}: {
  label: string;
  description?: string;
}) {
  let inputStyle: StyleProp<TextStyle>[] = [styles.input];

  if (description) {
    inputStyle.push(styles.descriptionInput);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "green",
    margin: 10,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.light.primary50,
    padding: 10,
    borderRadius: 6,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "left",
    width: "100%",
  },
  descriptionInput: {
    height: 200,
  },
});
