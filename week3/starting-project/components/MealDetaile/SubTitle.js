import { Text, StyleSheet } from "react-native";

function SubTitle({ children }) {
  return <Text style={styles.subTitle}>{children}</Text>;
}

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 25,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
    width: "80%",
    textAlign: "center",
    marginVertical: 1,
    marginBottom: 10,
    paddingBottom: 5,
  },
});

export default SubTitle;
