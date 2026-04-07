import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View } from "react-native";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.contentProfile}>
          <View style={styles.profile}></View>
        </View>
        <View style={styles.icons}>
          <Entypo name="message" size={30} color="#f5f5f5" />
          <MaterialIcons name="rectangle" size={28} color="#f5f5f5" />
        </View>
      </View>
      <View style={styles.box}>
        <MaterialIcons name="flag" size={35} color="#530082" />
      </View>
    </View>
  );
}
