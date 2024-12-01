import { Pressable, View, Text, StyleSheet } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.Pressable,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.button}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    margin: 10,
    width: "45%",
    height: 150,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  button: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  Pressable: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

export default CategoryGridTile;
