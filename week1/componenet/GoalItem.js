import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    //새로운 function을 만드는 것도 가능하지만 이렇게 bind를 써서 클릭한 녀석을 삭제할 수 있다.
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={(pressed) => pressed && styles.pressedItem}
      >
        <Text style={styles.colorText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  colorText: {
    color: "white",
    padding: 8,
  },
});
