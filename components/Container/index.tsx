import { View } from "react-native"
import { styles } from "./style"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

//caixa abaixo da header
export default function Container(){
    return <View style={styles.container}>
        <View style={styles.rectangle}></View>
        <MaterialIcons name="arrow-forward-ios" size={24} color="#f5f5f5" />
    </View>
}