import { View } from "react-native"
import { styles } from "./style"

type Props = {
    width: number,
    height: number
}

export default function Box ({width, height}: Props) {
    return <View style={[styles.box, {width: width, height: height}]} >

    </View>
}