import { Text, View, StyleSheet } from "react-native";

function MealDescription({ description }) {
  console.log(description);

  return (
    <View style={styles.listContainer}>
      {description.map((item) => (
        <Text key={item} style={styles.itemText}>
          {item}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  itemText: {
    marginVertical: 2,
    marginHorizontal: 20,
    textAlign: "center",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#e2b497",
    borderRadius: 10,
    backgroundColor: "#e2b497",
    padding: 10,
    marginVertical: 4,
  },
});

export default MealDescription;
