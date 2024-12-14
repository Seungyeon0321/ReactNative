import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import SubTitle from "../components/MealDetaile/SubTitle";
import MealDescription from "../components/MealDetaile/MealDescription";
import { MEALS } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
function MealScreen({ route }) {
  const navigation = useNavigation();
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Ionicons name="star" size={24} color="black" />,
    });
  }, []);

  const {
    ingredients,
    steps,
    duration,
    complexity,
    affordability,
    imageUrl,
    title,
  } = selectedMeal;

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text>{duration} mins</Text>
          <Text>{complexity.toUpperCase()}</Text>
          <Text>{affordability.toUpperCase()}</Text>
        </View>
        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <MealDescription description={ingredients} />
          <SubTitle>Steps</SubTitle>
          <MealDescription description={steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    margin: 10,
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    paddingTop: 30,
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    paddingTop: 10,
  },
  detailsContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    margin: 30,
  },
  listContainer: {
    width: "100%",
    alignItems: "center",
  },
});

export default MealScreen;
