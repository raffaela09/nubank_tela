import { View } from "react-native"
import { styles } from "./style"

type Props ={
    backgroundColor: string
}

export default function Dots({backgroundColor}: Props){
    return <View style={[styles.dot, {backgroundColor: backgroundColor}]}>

    </View>
}