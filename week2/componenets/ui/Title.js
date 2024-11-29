import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constant/Color";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: Colors.primary900,
    textAlign: "center",
  },
});

export default Title;
