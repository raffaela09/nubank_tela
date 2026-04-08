import { View } from "react-native"
import { styles } from "./style" 
import Entypo from '@expo/vector-icons/Entypo';

//props, que sao tipo as propriedades dessa funcao, nesse caso, eu queria trocar apenas a cor de fundo do circulo de dentro da pilula
//entao passei a propriedade de background, que ao chamar, eu passo a cor que eu quero.
type Props ={
 background: string
}

//passo oq a funcao recebe (o background) e o tipo, que nesse caso, pra facilitar, ele é do tipo props
export default function Pill ({background}: Props){
    return <View style={styles.pill}>
        {/* aqui, tem que passar o estilo dentro do array, pq essa props é uma propriedade de estilo */}
            <View style={[styles.circle, {backgroundColor: background}]}></View>
            <Entypo name="plus" size={19} color="#4e4c4c" />

    </View>
}