import Header from "@/components/Header";
import { StyleSheet, View } from "react-native";

export default function Tab() {
  return (
    <View style={styles.container}>
      <Header />
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
