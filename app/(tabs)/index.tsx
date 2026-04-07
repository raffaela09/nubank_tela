import { StyleSheet, Text, View } from "react-native";

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text>Tab [Home|Settings]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
