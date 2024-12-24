import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  
    function renderCategoryItem(itemData) {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={() => {
          navigation.navigate("MealOverview", {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(itemData) => itemData.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
