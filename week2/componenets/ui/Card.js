import { View, Text, StyleSheet } from "react-native";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 30,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Card;
