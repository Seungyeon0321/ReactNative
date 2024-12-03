import { FlatList, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
import { CATEGORIES } from "../data/dummy-data";

function MealOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((category) => category.id === categoryId).title,
    });
  }, [categoryId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return (
      <MealItem
        {...mealItemProps}
        onPress={() =>
          navigation.navigate("MealScreen", {
            mealId: item.id,
          })
        }
      />
    );
  }

  return (
    <FlatList
      data={displayedMeals}
      keyExtractor={(itemData) => itemData.id}
      renderItem={renderMealItem}
      numColumns={2}
    />
  );
}

export default MealOverviewScreen;
