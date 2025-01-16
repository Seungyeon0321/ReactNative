import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StyleProp,
  TextStyle,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { TextInputProps } from "react-native";

type InputBoxProps = {
  label: string;
  description?: boolean;
  value?: string | number;
  placeholder?: string;
  textInputConfig?: TextInputProps;
  onChangeText?: (text: string) => void;
  isValid?: boolean;
};

export default function InputBox({
  label,
  textInputConfig,
  value,
  placeholder,
  onChangeText,
  isValid,
}: InputBoxProps) {
  let inputStyle: StyleProp<TextStyle>[] = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.descriptionInput);
  }

  if (!isValid) {
    inputStyle.push(styles.invalidInput);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={inputStyle}
        placeholder={value?.toString()}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  input: {
    width: "100%",
    borderWidth: 2,
    borderColor: "grey",
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
    minHeight: 150,
    textAlignVertical: "top",
  },
  invalidInput: {
    borderColor: "red",
  },
});
