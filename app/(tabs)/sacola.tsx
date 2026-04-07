import { StyleSheet, Text, View } from "react-native";

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text>sacola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
