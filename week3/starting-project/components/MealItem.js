import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) {
  return (
    <View style={styles.mealItemContainer}>
      <Pressable
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text>{duration} mins</Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItemContainer: {
    margin: 10,
    width: "95%",
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 20,
    paddingBottom: 10,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

export default MealItem;
