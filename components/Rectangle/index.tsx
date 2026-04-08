import { View } from "react-native"
import { ReactNode } from "react"
import { styles } from "./style"
//react node pra tipar qualquer elemento, nesse caso, aqui eu quero receber um icone como o props

type Props= {
    icon: ReactNode
}
export default function Rectangle({icon}:Props){
    return <View style={styles.rectangle}>  
        {icon}
    </View>
}