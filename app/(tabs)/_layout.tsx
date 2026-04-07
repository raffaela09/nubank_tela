import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
import { StyleSheet } from "react-native";

//tabs estilizadas
//as rotas sao definidas pelo href
export default function Layout() {
  return (
    <Tabs>
      {/* o conteudo da barra flutuante aparece aqui */}
      <TabSlot />

      {/* a lista que contem os components, ou elementos */}
      <TabList style={styles.container}>
        {/* a tab trigger serve para alterar entre as abas */}
        <TabTrigger name="home" href="/" style={styles.button}>
          <FontAwesome6 name="arrow-right-arrow-left" size={23} color="white" />
        </TabTrigger>

        <TabTrigger name="article" href="/article" style={styles.button}>
          <MaterialIcons name="attach-money" size={28} color="white" />
        </TabTrigger>

        <TabTrigger name="sacola" href="/sacola" style={styles.button}>
          <Ionicons name="bag-outline" size={25} color="white" />
        </TabTrigger>

        <TabTrigger name="phone" href="/phone" style={styles.button}>
          <Ionicons name="phone-portrait-outline" size={24} color="white" />
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 45,
    left: 40,
    right: 40,
    backgroundColor: "#191919",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    borderRadius: 50,
    elevation: 5,
    shadowColor: "#a19d9d",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
