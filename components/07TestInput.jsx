import {View, Text, TextInput, StyleSheet} from "react-native"
import { useState } from "react"

const MyTextInput = () => {

    const [frase, setFrase] = useState("")

    return (
        <View style={estilo.View}>
            <Text style={estilo.header}>Tradutor Emoji</Text>
            <TextInput 
                style={estilo.input}
                placeholder="Digite uma frase"
                defaultValue={frase}
                onChangeText={(textoDigitado)=>setFrase(textoDigitado)}
            />

            <Text style={estilo.frase}>
                {
                frase
                .split(" ")
                .map((palavra) => palavra && "😂")
                }
            </Text>
        </View>
    )
}
const estilo = StyleSheet.create(
    {
        header:{
            fontSize:40,
            fontWeight:"bold",
            color:"blue",
            paddingBottom:20
        },

        View:{
            padding:20,
            flex:1,
            backgroundColor:"#C0C0C0",
            alignItems:"center"
        },
        input:{
            height:50,
            borderColor:"black",
            borderWidth: 2,
            fontSize:22,
            paddingLeft: 10

        },
        frase: {
            fontSize:20,
            fontWeight:"bold",
            paddingTop:10
        }
        
    }
)

export default MyTextInput