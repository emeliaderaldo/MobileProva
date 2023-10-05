import {View, Text} from "react-native"

const MyCat = () => {
    //let nomeDoGato = "Pantera"

    const getFullName =(primeiroNome, segundoNome) =>{
        return primeiroNome + "" + segundoNome
    }

    return(
        <View>
            <Text style={{fontSize:20}}>
                O nome do meu gato é {getFullName("Theodoro", "Afonso")}
            </Text>
        </View>
    )
}

export default MyCat