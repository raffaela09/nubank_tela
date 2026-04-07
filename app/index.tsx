import { StyleSheet, Text, View } from "react-native";

//pagina que se acessa pela tab -> index
export default function Tab() {
  return (
    <View style={styles.container}>
      <Text>Index</Text>
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
