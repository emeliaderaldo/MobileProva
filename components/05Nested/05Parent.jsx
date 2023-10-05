import {View, Text} from "react-native"
import ChildA from "./05ChildA" 
import ChildB from "./05ChildB"

const Parent = () => {
    return (
        <View>
            <Text style={{
                fontSize:25, fontWeight:"bold"
            }}> 
            
            Eu sou o componente pai
            
            </Text>
            <ChildA/>
            <ChildB dica="Escreva seu nome neste input!"/>
            <ChildB dica="Escreva seu sobrenome!"/>
            <ChildB dica="Escreva seu endereço!"/>
        </View>
    )
}

export default Parent