import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

interface ExpenseItemProps {
  date: string;
  amount: number;
  description: string;
}

export default function ExpenseItem({
  date,
  amount,
  description,
}: ExpenseItemProps) {
  return (
    <View>
      <Pressable
        android_ripple={{ color: Colors.light.primary50 }}
        style={styles.container}
      >
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{description}</Text>
          <Text>{date}</Text>
        </View>
        <View style={styles.amount}>
          <Text style={styles.amountText}>{amount}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: Colors.light.primary50,
    marginVertical: 5,
    padding: 10,
    height: 70,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 10,
  },
  description: {
    flex: 0.8,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  amount: {
    flex: 0.2,
    borderRadius: 10,
    backgroundColor: Colors.light.primary50,
    justifyContent: "center",
  },
  amountText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});
