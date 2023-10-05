import {View, Text, TextInput, Button, StyleSheet} from "react-native"
import { useState } from "react"

const JuntarNomes = () => {

    const [Nome, setNome] = useState("")
    const [Nome2, setNome2] = useState("")
    const [completo, setCompleto] = useState("")

    return (
        <View style={estilos.View}>
            <Text style={estilos.header}>Descubra seu nome</Text>
            <TextInput 
                style={estilos.input}
                placeholder="Digite seu Nome"
                defaultValue={Nome}
                onChangeText={(textoDigitado)=>setNome(textoDigitado)}
            />

            <TextInput 
                style={estilos.input}
                placeholder="Digite seu Sobrenome"
                defaultValue={Nome2}
                onChangeText={(textoDigitado)=>setNome2(textoDigitado)}
            />

            <View>
                <Button
                    title="JUNTAR"
                    onPress={
                        () => {
                            console.log(Nome + " " + Nome2)
                            setCompleto(Nome + Nome2)
                        }
                    }
                />
            </View>

            <Text style={estilos.frase}>
                {completo}
                {/* {
                frase
                .split(" ")
                .map((palavra) => palavra && "😂")
                } */}
            </Text>
        </View>
    )
}
const estilos = StyleSheet.create(
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

export default JuntarNomes