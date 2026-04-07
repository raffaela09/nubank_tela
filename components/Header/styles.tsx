import Constants from "expo-constants";
import { StyleSheet } from "react-native";
const statusBarHeight = Constants.statusBarHeight;

export const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight, //pra exibir a barra de status, mas acredito que tbm pode se usar safearea
    backgroundColor: "#530082",
    width: "100%",
    position: "absolute",
    top: 0, //pra prender a header no topo
    left: 0, //estica a borda
    right: 0,
    height: 200,
    alignItems: "center",
  },
  profile: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: "#f5f5f58f",
    borderRadius: 999,
  },
  content: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    flexDirection: "row",
  },
  icons: {
    flexDirection: "row",
    gap: 10,
    width: "50%",
    justifyContent: "flex-end",
  },
  contentProfile: {
    width: "50%",
    justifyContent: "flex-start",
  },
  box: {
    width: "92%",
    backgroundColor: "#f5f5f5",
    marginTop: 10,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    padding: 12,
  },
});
