import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
export default function RightHeaderButton() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const addButtonHandler = () => {
    navigation.navigate("manage-expense");
  };

  return (
    <View>
      <Ionicons name="add" size={24} color="black" onPress={addButtonHandler} />
    </View>
  );
}
