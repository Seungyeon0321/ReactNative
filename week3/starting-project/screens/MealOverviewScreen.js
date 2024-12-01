import { FlatList, Text } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealOverviewScreen({ route }) {
  const { categoryId } = route.params;
  console.log(categoryId);

  function renderMealItem(itemData) {
    return <Text>{itemData.item.title}</Text>;
  }

  return (
    <FlatList
      data={MEALS}
      keyExtractor={(itemData) => itemData.id}
      renderItem={renderMealItem}
      numColumns={2}
    />
  );
}

export default MealOverviewScreen;
